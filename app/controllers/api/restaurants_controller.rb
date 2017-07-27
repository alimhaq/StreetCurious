class Api::RestaurantsController < ApplicationController
  def index
    location = params[:location] || 'san francisco'
    term = params[:term] || ''
    radius = params[:radius] || 1300
    response = RestClient::Request.execute(
      method: :get,
      url: "https://api.yelp.com/v3/businesses/search?term=#{term}&location=#{location}&radius=#{radius}&limit=5",
      headers: {Authorization: "Bearer #{ENV["yelp_api_access_token"]}"}
    )
    render json: response
  end

  def show
    response = RestClient::Request.execute(
      method: :get,
      url: "https://api.yelp.com/v3/businesses/#{params[:id]}",
      headers: {Authorization: "Bearer #{ENV["yelp_api_access_token"]}"}
    )
    render json: response
  end
end
