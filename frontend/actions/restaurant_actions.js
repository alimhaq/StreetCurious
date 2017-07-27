import * as APIUtil from '../util/restaurant_api_util'

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const getRestaurants = (searchTerms) => dispatch => (
  APIUtil.fetchRestaurants(searchTerms).then(restaurants => (
    dispatch(receiveRestaurants(restaurants))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getRestaurant = (restaurantID) => dispatch => (
  APIUtil.fetchRestaurant(restaurantID).then(restaurant => (
    dispatch(receiveRestaurant(restaurant))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
})

export const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// not sure about the argument being passed into receiveRestaurants? 
// what does it need to be? read up on thunk middleware