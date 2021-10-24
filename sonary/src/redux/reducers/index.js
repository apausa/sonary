import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import detailsReducer from './detailsReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  sonary: dashboardReducer,
  song: detailsReducer,
  favorites: profileReducer
});
