class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
    render :index
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: ["invalid channel"], status: 401
    end
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def channel_params
    params.require(:channel).permit(:name, :description)
  end

end
