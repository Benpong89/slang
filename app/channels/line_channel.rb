class LineChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'line_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
