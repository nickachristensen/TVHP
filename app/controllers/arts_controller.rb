class ArtsController < ApplicationController

    def index
        @arts = Art.all
        render json: @arts, status: :ok
    end

    def show
        @art = Art.find(params[:id])
        render json: @art, status: :ok
    end
    
end
