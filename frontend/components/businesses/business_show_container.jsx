import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BusinessShow from './business_show';
import { getRestaurant } from '../../actions/restaurant_actions';

const mapStatetoProps = (state, ownProps) => {
  return {
    restaurant: state.restaurants.selectedRestaurant
  };
}

const mapDispatchtoProps = (dispatch) => {
  return {
    getRestaurant: (restaurantID) => dispatch(getRestaurant(restaurantID))
  };
}

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(BusinessShow));