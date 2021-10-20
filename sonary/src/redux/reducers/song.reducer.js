import actionTypes from '../actions/actionTypes';

export default function songReducer(state = [], action) {
  let song = state;
  switch (action.type) {
    case actionTypes.LOAD_DETAILS:
      song = action.details.lyrics_body;
      song = song.split('\n');
      break;
    default:
      break;
  }
  return song;
}
