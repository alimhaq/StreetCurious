class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.business_id = params[:business_id]
    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    business = Business.find(params[:business_id])
    @reviews = business.reviews
    render :index
  end

  def show
    @review = Review.find_by(business_id: params[:business_id], id: params[:id])
    render :show
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end

  def profile_reviews
    @reviews = Review.all.where('user_id = ?', params[:user_id])
    @reviews = (@reviews.sort_by { |review| review.created_at }).reverse!
    render :index
  end

  private
  def review_params
    params.require(:review).permit(:title, :body, :rating)
  end
end
