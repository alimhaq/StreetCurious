import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantsReducer from './restaurants_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  restaurants: RestaurantsReducer
});

export default RootReducer;