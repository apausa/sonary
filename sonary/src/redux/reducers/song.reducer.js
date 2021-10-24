import actionTypes from '../actions/actionTypes';

export default function songReducer(state = [], action) {
  let song = state;
  if (action.type === actionTypes.LOAD_DETAILS) {
    const details = action.details?.lyrics_body?.split('\n');
    song = details;
  }
  return song;
}
