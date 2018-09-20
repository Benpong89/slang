class Api::SubscriptionsController < ApplicationController

# if @subscriptions doesn't include subscribeable_id 1 (aka general) then create it?

  def index
    @subscriptions = current_user.subscriptions
    render :index
  end

  def create
    @subscription = Subscription.new(subscription_params)
    if @subscription.save
      render :show
    else
      render json: ["invalid subscription"], status: 401
    end
  end

  def show
    @subscription = Subscription.find(params[:id])
  end

  def destroy
  @subscription = Subscription.find(params[:id])
    if (@subscription.subscribeable_id == 1)
      render json: ["Can't delete general Channel"], status: 401
    else
      @subscription.destroy
      render :show
    end
end

  def subscription_params
    params.require(:subscription).permit(:user_id, :subscribeable_id, :subscribeable_type)
  end

end
