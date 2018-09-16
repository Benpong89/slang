class LineChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'line_channel'
  end

  def speak(data)
    new_message = Message.create(body: data['body'], author_id: data['author_id'], messageable_type: data['messageable_type'], messageable_id: data['messageable_id'])

    LineChannel.broadcast_to('line_channel', new_message)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end


# this is what (data) looks like when it comes back from frontend;

    # {"data"=>{"body"=>"Finally back in the DB", "author_id"=>16, "messageable_type"=>"main test channel", "messageable_id"=>7}, "action"=>"speak"}

    # users = User.create([
    #   {username: 'guest', password: '123456' },
    #   {username: 'Vincent Vega', password: '123456' },
    #   {username: 'Jules Winnfield', password: '123456' },
    # ])
