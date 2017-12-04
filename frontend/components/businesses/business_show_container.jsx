import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BusinessShow from './business_show';
import { getRestaurant } from '../../actions/restaurant_actions';
import { createReview, requestReviews } from '../../actions/review_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    restaurant: state.restaurants.selectedRestaurant,
    user: state.session.currentUser,
    reviews: state.reviews
  };
}

const mapDispatchtoProps = (dispatch) => {
  return {
    getRestaurant: (restaurantID) => dispatch(getRestaurant(restaurantID)),
    createReview: (businessid, review) => dispatch(createReview(businessid, review)),
    requestReviews: (businessid) => dispatch(requestReviews(businessid))
  };
}

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(BusinessShow));