class Api::SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      render "api/users/show"
    else
      render json: ["invalid username and password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
      render "api/users/show"
    else
      render json: ["No one logged in to sign out"], status: 404
    end
  end
end
