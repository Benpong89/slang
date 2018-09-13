class LineChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
  end

  def received(data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
