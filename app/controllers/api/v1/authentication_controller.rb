class Api::V1::AuthenticationController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :authenticate_request

  def login
    #binding.pry
    user = User.find_by_email(user_params[:email])
    if user&.authenticate(user_params[:password])
      token = jwt_encode(user_id: user.id)
      render json: { token: token, message:'successful' }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private
  def user_params
    params.require(:data).permit(:email, :password)
  end
end

