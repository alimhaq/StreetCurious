import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { getRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = state => {
  return { restaurants: state.restaurants.restaurantList };
};

const mapDispatchToProps = dispatch => {
  return { getRestaurants: () => dispatch(getRestaurants()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);