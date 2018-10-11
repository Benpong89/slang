class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
    render :index
  end

  def create
    debugger
    @message = Message.new(message_params)
    if @message.save
      render :show
    else
      render json: ['invalid message'], status: 401
    end
  end

  def show
    @message = Message.find(params[:id])
  end

  def destroy
    @message = Message.find(params[:id])
    if @message.author_id == current_user.id
      @message.destroy
      render :show
    else
      render json: ["Can't delete someone else's message"], status: 401
    end
  end

  def message_params
    params.require(:message).permit(:body, :author_id, :messageable_id, :messageable_type)
  end
end
