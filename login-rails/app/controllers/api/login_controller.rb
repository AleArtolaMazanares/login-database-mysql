class Api::LoginController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @users = User.all
        render json: @users
    end
    def create
        user = User.find_by(email: params[:user][:email])
        if user && user.valid_password?(params[:user][:password])
            sign_in user
            render json: {status: :success, user:user}
        else
            render json: {status: 'no autorizado'}
        end
    end
end
