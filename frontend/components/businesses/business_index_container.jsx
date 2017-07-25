import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { getRestaurants } from '../../actions/restaurant_actions';
// import { selectAllRestaurants } from '../../reducers/restaurants_selector';
// might I need a selector?

const mapStateToProps = state => {
  return { restaurants: selectAllRestaurants(state) };
};

const mapDispatchToProps = dispatch => {
  return { getRestaurants: () => dispatch(getRestaurants()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);