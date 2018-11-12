class LineChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'line_channel'
  end

  def speak(data)
    case data['socket_type']
    when 'message'
      message = data['message']
      new_message = Message.create(body: message['body'], author_id: message['author_id'], messageable_type: message['messageable_type'], messageable_id: message['messageable_id'])

      @socket_message = {
        message: new_message,
        socket_type: 'message'
      }

      LineChannel.broadcast_to('line_channel', @socket_message)
    when 'direct_message'
      direct_message = data['pairUserIds']
      @direct_message = DirectMessage.create

      @subscription = Subscription.create(
        user_id: direct_message[0].to_i,
        subscribeable_id: @direct_message.id,
        subscribeable_type: 'DirectMessage'
      )

      @other_subscription = Subscription.create(
        user_id: direct_message[1].to_i,
        subscribeable_id: @direct_message.id,
        subscribeable_type: 'DirectMessage'
      )

      @pair1 = {
        direct_message: { id: @direct_message.id,
                          names: [@direct_message.users[0].username, @direct_message.users[1].username],
                          type: 'Direct Message',
                          subs: @direct_message.subscriptions },
        subscription: @subscription,
        socket_type: 'direct_message'
      }

      @pair2 = {
        direct_message: { id: @direct_message.id,
                          names: [@direct_message.users[0].username, @direct_message.users[1].username],
                          type: 'Direct Message',
                          subs: @direct_message.subscriptions },
        subscription: @other_subscription,
        socket_type: 'direct_message'
      }

      # @pair1['socket_type'] = 'direct_message'
      # @pair2['socket_type'] = 'direct_message'

      LineChannel.broadcast_to('line_channel', @pair1)
      LineChannel.broadcast_to('line_channel', @pair2)
    when 'delete_direct_message'
      @dm_id = data['direct_message_id']

      @direct_message = DirectMessage.find(@dm_id)
      @subscription_id1 = Subscription.find(@direct_message.subscriptions[0].id)
      @subscription_id2 = Subscription.find(@direct_message.subscriptions[1].id)

      @subscription_id1.destroy
      @subscription_id2.destroy
      @direct_message.destroy

      @pair3 = {
        direct_message_id: @dm_id,
        subscription_id: @subscription_id1,
        socket_type: 'delete_direct_message'
      }

      @pair4 = {
        direct_message_id: @dm_id,
        subscription_id: @subscription_id2,
        socket_type: 'delete_direct_message'
      }
      # invoke remove subscription as well on the frton end
      LineChannel.broadcast_to('line_channel', @pair3)
      LineChannel.broadcast_to('line_channel', @pair4)
    end
  end
  # pass in current user from the front...but I do need both current user and sending to user. Pass in both.

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end

# def socket_direct_message(data)
#   debugger
#   @direct_message = DirectMessage.create
#
#   @subscription = Subscription.create(
#     user_id: data[0].to_i,
#     subscribeable_id: @direct_message.id,
#     subscribeable_type: 'DirectMessage'
#   )
#
#   @other_subscription = Subscription.create(
#     user_id: data[1].to_i,
#     subscribeable_id: @direct_message.id,
#     subscribeable_type: 'DirectMessage'
#   )
#
#   @pair1 = {
#     direct_message: { id: @direct_message.id,
#                       names: [@direct_message.users[0].username, @direct_message.users[1].username],
#                       type: "Direct Message",
#                       subs: @direct_message.subscriptions },
#     subscription: @subscription
#   }
#
#   @pair2 = {
#     direct_message: { id: @direct_message.id,
#                       names: [@direct_message.users[0].username, @direct_message.users[1].username],
#                       type: "Direct Message",
#                       subs: @direct_message.subscriptions },
#     subscription: @other_subscription
#   }
#
#   @pair1['socket_type'] = 'direct_message'
#   @pair2['socket_type'] = 'direct_message'
#   debugger
#
#   LineChannel.broadcast_to('line_channel', @pair1)
#   LineChannel.broadcast_to('line_channel', @pair2)
# end
