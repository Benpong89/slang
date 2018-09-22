[Live demo!](https://slangg.herokuapp.com/#/)

Slang is a Slack clone that provides users with the ability to create and communicate through Channels and Direct Messages.

Tehcnologies used inlucde, Ruby on Rails, React.js and Redux.

Highlights of this app-clone include implementation of WebSocket protocol and private Direct Messages.

WebSocket is a commuication protocol which operations with the same purpose as HTTP protocol, but allows for a full duplex line of communication. This means that unlike traditional HTTP, the standard request response cycle can happen simultaneously. The main difference is that the WebSocket connection is persisted. While it sounds like it may take a lot of data, it scales well because the server (which controls the WebSocket connection) maintes just one WebSocket connection per client.

To achieve this full-duplex state, I utilized the Action Cable feature of Ruby on Rails which integrates WebSockets with our application and database. The basic steps in implementation Action Cables is to

1.  Mount an Action Cable route and create a Stream. (backend)
2.  Subscribe to the Stream receive from and send to the Stream. (frontend)
3.  Broadcast to the Stream. (backend)

The trickiest part of the process is initiating the subscription which defines how the frontend will receive the data from the backend and how the frontend will send data to the backend. Here I have defined those actions as "received" and "speak" for received data from the backend and speak(ing) data to the backend.

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

Direct Messages is a feature of Slang that allows you to messages other users in a private channel. This channel is not visible to users who are not subscribed to the Direct Message channel. Framing Direct Messages as a channel that users subscribe to, allow for better scaling when implemeting Multiple Direct Messages. Instead of creating a new Direct Message Channel or instance, Users can subscribe or unsubscribe, same as with a regular public Channel. Multi Direct Messages is not available yet..
