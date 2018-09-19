class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      signin(@user)
      render :show
    else
        render json: @user.errors.full_messages, status: 422
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end


# default_pics = []
#   if @user.imgURL.empty?
#     @user.imgURL = default_pics.random
#   end
# Save pics to assets image
#  Need to source in into window for Heroku
# how to return random default value..
