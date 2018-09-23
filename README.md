[Live demo!](https://slangg.herokuapp.com/#/)

Slang is an app clone of Slack, that provides users with the ability to communicate through Channels and Direct Messages, utilizing Action Cable WebSocket connections to allow for realtime Live Chat.

Technologies used include, Ruby on Rails, React.js and Redux.

Highlights of Slang include implementation of WebSocket protocol and messaging through Channels and Direct Messages.

WebSocket is a communication protocol which operations with the same purpose as HTTP protocol, but allows for a full duplex line of communication. This means that unlike traditional HTTP, the standard request response cycle happens simultaneously. This exchange between client and server is possibly because unlike HTTP, the WebSocket connection persists until the client unsubscribes from the connection.

To achieve this full-duplex state, I utilized the Action Cable feature of Ruby on Rails which integrates WebSockets with our frontend and backend. The basic steps in implementing Action Cables include:

1.  Server mounts an Action Cable route and creates a Stream.
2.  Client subscribes to receive and send data to the Stream.
3.  Server Broadcasts data to the Stream.

The most complex part of this process is initiating the Subscription on the client side, which defines how the client will interact with the Action Cable's Stream of data. In the code below, I have defined those interactions as "received" and "speak". Once the code below is run on the client side, a Subscription to the specified WebSocket Channel's Stream will be established. This means that both the client will always be listening for new data sent into the Channel. When the DB Broadcasts data, the client side will immediately receive the data and implement the functions as listed. Conversely, the client side can Speak data into the Stream, and request that the DB perform specific functions.

NB: In my code there are two speak functions defined. One in the DB and one for the client side. They have the same name for convenience, in remembering that when the speak function is invoked on the client side, it will request that the server performs a speak function on the backend.

    App.cable.subscriptions.create(
      { channel: "LineChannel", room: "Line Room" },
      {
        received: data => {
          dispatch(
            receiveMessage(message)
          );
        },
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );

Slang's Live Chat feature is framed around communication through Channels and Direct Messages. Users can create public (and coming soon, private!) channels and send messages. Any user that subscribes to Channels, will be able to view prior messages and submit new messages. Direct Messages are specifically between two users and are not visible to any other user.

The organization of this interaction between Users and Channels/Direct Messages is based on a system of subscriptions. Users can subscribe to specific Channels and Direct Messages. This allows for efficiency in scaling, when adding or removing users to Channels and Direct Messages. Instead of updating the instance of the Channel or Direct Message, Users simply subscribe or unsubscribe to the specified Channel or Direct Message.

Upcoming features include:

1.  Channel member details section to show number of members subscribed to a channel.
2.  Private Channels that other users can only be subscribed to by invitation.
