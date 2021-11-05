class ArtsController < ApplicationController

    def index
        @arts = Art.all
        render json: @arts, status: :ok
    end
end
