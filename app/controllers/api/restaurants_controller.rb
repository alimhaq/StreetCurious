class Api::RestaurantsController < ApplicationController
  def index
    response = RestClient::Request.execute(
      method: :get,
      url: "https://api.yelp.com/v3/businesses/search?term=poke&location=san francisco&radius=1300&limit=10",
      headers: {Authorization: "Bearer #{ENV["yelp_api_access_token"]}"}
    )
    render json: response
  end
end
