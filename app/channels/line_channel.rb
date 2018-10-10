class LineChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'line_channel'
  end

# how to check here if data is message or subscription? Switch statement?
  def speak(data)
    new_message = Message.create(body: data['body'], author_id: data['author_id'], messageable_type: data['messageable_type'], messageable_id: data['messageable_id'])

    LineChannel.broadcast_to('line_channel', new_message)
  end

  # def subscription(data)
  #   new_subscription = Subscription.create(user_id: data['user_id'], subscribeable_id: data['subscribeable_id'], subscribeable_type: data['subscribeable_type'])
  #
  #   LineChannel.broadcast_to('line_channel', new_subscription)
  # end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
