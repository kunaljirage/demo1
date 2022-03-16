class Api::V1::UserController < ApplicationController
  protect_from_forgery with: :null_session
  def create
    user = User.new(user_params)
        if user.save
          session[:user] = user.id
          render json:{ user: user, message: 'successful'}, status: 201
        else
            render json: {errors: user.errors}, status: 422
        end
  end

  def show
    user = User.find_by(user_params)
    if user
       render json:{ user: user, message: 'successful'}, status: 201

    else
        render json: {message: 'fail'}, status: 422
    end
  end

  def destroy
    user = User.find_by(user_params).destroy
  end
  private

  def user_params
  params.require(:user).permit(:name, :email, :mobile_number, :user_name, :password)
  end

  def user_login_params
    params.require(:user).permit(:user_name, :password)
  end
end
