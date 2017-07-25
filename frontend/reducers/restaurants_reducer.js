import merge from 'lodash/merge';

import {
  RECEIVE_RESTAURANTS,
  RECEIVE_ERRORS
} from '../actions/restaurant_actions';

const nullRestaurantList = Object.freeze({
  restaurantList: [{}],
  errors: []
})

const RestaurantsReducer = (state = nullRestaurantList, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_RESTAURANTS:
      const restaurantList = action.restaurants.businesses;
      return merge({}, nullRestaurantList, {
        restaurantList
      });
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, nullRestaurantList, {
        errors: action.errors
      });
    default:
      return state;
  }
};

export default RestaurantsReducer;