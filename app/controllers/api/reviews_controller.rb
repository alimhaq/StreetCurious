class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.business_id = params[:business_id]
    @review.user_id = current_user.id
    if @review.save!
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.where(business_id: params[:business_id]).includes(:user)
    render :index
  end

  def show
    @review = Review.find_by(business_id: params[:business_id], id: params[:id])
    render json: @review
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render json: @review
  end

  def profile_reviews
    @reviews = Review.all.where('user_id = ?', params[:user_id])
    @reviews = (@reviews.sort_by { |review| review.created_at }).reverse!
    render :index
  end

  private
  def review_params
    params.require(:review).permit(:title, :body, :rating, :business_id)
  end
end
