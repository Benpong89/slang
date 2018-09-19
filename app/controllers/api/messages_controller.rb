class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
    render :index
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      # If the message is created, then broadcast to channel, so that listening subscribers can receive as data
      # arg 1 is stream name and arg2 is message
      LineChannel.broadcast_to('line_channel', @message)
      # ActionCable.server.broadcast 'line_channel', body:  message.body,
      render :show
    else
      render json: ["invalid message"], status: 401
    end
  end

  def show
    @message = Message.find(params[:id])
  end

  def destroy
  @message = Message.find(params[:id])
  @message.destroy

  render :show
end

  def message_params
    params.require(:message).permit(:body, :author_id, :messageable_id, :messageable_type)
  end

end
