class Api::DirectMessagesController < ApplicationController
  def index
    @direct_messages = current_user.direct_messages
    render :index
  end

  def show
    @direct_message = DirectMessage.find(params[:id])
  end

  def destroy
    @direct_message = DirectMessage.find(params[:id])
    Subscription.destroy(@direct_message.subscriptions[0].id)
    Subscription.destroy(@direct_message.subscriptions[1].id)
    @direct_message.destroy
    render :show
  end
end
