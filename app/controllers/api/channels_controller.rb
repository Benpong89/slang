class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
    if @channels.find(1).subscriptions.find_by(user_id: current_user.id)
      render :index
    else
      Subscription.create(
        user_id: current_user.id,
        subscribeable_id: 1,
        subscribeable_type: 'Channel'
      )
    end
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save

      @subscription = Subscription.create(
        user_id: current_user.id,
        subscribeable_id: @channel.id,
        subscribeable_type: 'Channel'
      )

      render :create
    else
      render json: ['invalid channel'], status: 401
    end
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def channel_params
    params.require(:channel).permit(:id, :name, :description)
  end
end
