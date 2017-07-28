import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const reviewsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return [...oldState, action.review];
    case REMOVE_REVIEW:
      newState = oldState.slice(0);
      let idx;
      newState.forEach((review, i) => {
        if (review.id === action.review.id) {
          idx = i;
        }
      });
      newState.splice(idx, 1);
      return newState;
    default:
      return oldState;
  }
};

export default reviewsReducer;