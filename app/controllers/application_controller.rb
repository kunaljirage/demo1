class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  include JsonWebToken
  before_action :authenticate_request
  private
    def authenticate_request
      header = request.headers["Authorization"]
      #binding.pry
      header = header.split(" ").last if header
      decoded = jwt_decode(header)
      @current_user = User.find(decoded[:user_id])
    end
end
