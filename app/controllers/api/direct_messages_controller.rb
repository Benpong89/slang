class Api::DirectMessagesController < ApplicationController
  def index
    @direct_messages = current_user.direct_messages
    render :index
  end

  def create
    @direct_message = DirectMessage.new
    if @direct_message.save

      @subscription = Subscription.create(
        user_id: current_user.id,
        subscribeable_id: @direct_message.id,
        subscribeable_type: 'DirectMessage'
      )

      Subscription.create(
        user_id: params[:userId],
        subscribeable_id: @direct_message.id,
        subscribeable_type: 'DirectMessage'
      )
      render :create
    else
      render json: ['invalid direct_message'], status: 401
    end
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
