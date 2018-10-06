class Api::SubscriptionsController < ApplicationController
  def index
    @subscriptions = Subscription.all
    if @subscriptions.pluck(:subscribeable_id).include?(1)
      render :index
    else
      Subscription.create('user_id' => current_user.id, 'subscribeable_id' => '1', 'subscribeable_type' => 'Channel')
    end
  end

  def create
    @subscription = Subscription.new(subscription_params)
    if @subscription.save
      render :show
    else
      render json: ['invalid subscription'], status: 401
    end
  end

  def show
    @subscription = Subscription.find(params[:id])
  end

  def destroy
    @subscription = Subscription.find(params[:id])
    if @subscription.subscribeable_id == 1
      render json: ["Can't unsubscribe from general Channel"], status: 401
    else
      @subscription.destroy
      render :show
    end
  end

  def subscription_params
    params.require(:subscription).permit(:user_id, :subscribeable_id, :subscribeable_type)
  end
end
