![alt text](https://github.com/Benpong89/slang/blob/master/app/assets/images/newlogo7.png)

[Live demo!](https://slangg.herokuapp.com/#/)

Slang is an app clone of Slack. Utilizing a full duplex WebSocket protocol connection, users can enjoy real-time live chat in public Channels and private Direct Messages. Technologies used include, Ruby on Rails, React.js and Redux.

The highlight of Slang, is the establishment of a WebSocket protocol connection that enables real-time live chat. WebSocket is a communication protocol that connects the server with the client. While this operation can be achieved with traditional HTTP protocol, WebSockets allow for a full duplex line of communication that persists. This means that unlike traditional HTTP, the standard request response cycle happens simultaneously and data can be continuously transmitted until the client disconnects.

To achieve this WebSocket connect, I utilized the ActionCable feature of Ruby on Rails. The basic steps in implementing ActionCable includes:

1.  Server mounts an ActionCable route and creates a Stream.
2.  Client subscribes to receive and send data to the Stream.
3.  Server Broadcasts data to the Stream.

The most complex part of this process is initiating the Subscription on the client side, which defines how the client will interact with the ActionCable's Stream of data. In the code below, I have defined those interactions as "received" and "speak". Once the code below is run on the client side, a Subscription to the specified ActionCable's Stream will be established. With this subscription, the client will always be listening for new data sent into the Stream. When the DB Broadcasts data, the client side will immediately receive the data and implement the functions as listed. Conversely, the client side can Speak data into the Stream, and request the DB perform specific functions.

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

Slang's Live Chat feature is framed around communication through public Channels and private Direct Messages. Users that subscribes to Channels can view prior messages and submit new messages. Direct Messages are specifically between two users and are not visible to any other user. The organization of this interaction between Users, Channels and Direct Messages is based on a polymorphic system of subscriptions, which allow for DRY code through associations. Users subscribe to specific Channels and Direct Messages which allows for efficiency and performant scaling.

Upcoming features include:

1.  Channel member details section to show number of members subscribed to a channel.
2.  Private Channels that other users can only be subscribed to by invitation.
