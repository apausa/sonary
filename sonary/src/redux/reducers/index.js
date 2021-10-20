import { combineReducers } from 'redux';
import sonaryReducer from './sonary.reducer';
import songReducer from './song.reducer';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
  sonary: sonaryReducer,
  song: songReducer,
  favorites: favoriteReducer
});
