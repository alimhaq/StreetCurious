import * as APIUtil from '../util/restaurant_api_util'

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';

export const getRestaurants = () => dispatch => (
  APIUtil.fetchRestaurants().then(restaurants => (
    dispatch(receiveRestaurants(restaurants))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

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