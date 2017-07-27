import { connect } from 'react-redux';
import SearchBar from './searchbar';
import { withRouter } from 'react-router-dom';
import { getRestaurants } from '../../actions/restaurant_actions'
// import { changeFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => {
  return ({

  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getRestaurants: (searchTerms) => dispatch(getRestaurants(searchTerms))
  });
};

export default connect(null, mapDispatchToProps)(SearchBar);