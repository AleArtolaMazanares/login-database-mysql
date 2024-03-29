class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @users = User.all
        render json: @users
    end
    def show
        @user = User.find(params[:id])
        render json: @user
    end
    def create
        @user = User.new(user_params)
        if @user.save
            render json: {status: :success, user:@user}
        else
            render json: {status: :unproccesable_entity}
        end
    end
    private
    def user_params
        params.require(:user).permit(:email,:password,:password_confirmation)
    end
end
