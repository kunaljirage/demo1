class Api::V1::UserController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :authenticate_request, only: [:create]

  def create
    user = User.new(user_params)
        if user.save
          render json:{ user: user, message: 'successful'}, status: 201
        else
            render json: {errors: user.errors}, status: 422
        end
  end

  def show
    user=@current_user.slice :name, :email, :mobile_number, :id
    render json:{ user:user, message: 'successful'}, status: 201
  end

  # def destroy
  #   @current_user.destroy
  # end

  private
  def user_params
  params.require(:user).permit(:name, :email, :mobile_number, :user_type, :password)
  end
end
