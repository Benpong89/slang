class Api::SubscriptionsController < ApplicationController
  # Make it so it doesn't return all the Channels, but only for the specific user that I want.

  def index
    @subscriptions = current_user.subscriptions
    # @subscriptions = Subscription.all
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
  @subscription.destroy

  render :show
end

  def subscription_params
    params.require(:subscription).permit(:user_id, :subscribeable_id, :subscribeable_type)
  end

end
