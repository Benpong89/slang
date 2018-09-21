class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  # @channels = Channel.all
  # if @channels.pluck(:name).include?(current_user.username)
  #   render :index
  # else
  #   Channel.create({"name"=>current_user.username, "description"=>"DM"})
  # end

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
    params.require(:channel).permit(:id, :name, :description)
  end

end
