class Api::DirectMessagesController < ApplicationController
  def index
    @direct_messages = DirectMessage.all
    render :index
  end

  def create
    @direct_message = DirectMessage.new()
    if @direct_message.save
      render :show
    else
      render json: ["invalid direct_message"], status: 401
    end
  end

  def show
    @direct_message = DirectMessage.find(params[:id])
  end


end
