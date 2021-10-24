import actionTypes from '../actions/actionTypes';

export default function songReducer(state = [], action) {
  let song = state;
  if (action.type === actionTypes.LOAD_DETAILS) {
    song = action.details?.lyrics_body?.split('\n');
  }
  return song;
}
