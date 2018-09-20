class Api::DirectMessagesController < ApplicationController
  def index
    @directmessages = DirectMessage.all
    render :index
  end

  def create
    @directmessage = DirectMessage.new(directmessage_params)
    if @directmessage.save
      render :show
    else
      render json: ["invalid directmessage"], status: 401
    end
  end

  def show
    @directmessage = DirectMessage.find(params[:id])
  end

  def directmessage_params
    params.require(:directmessage).permit()
  end

end
