import actionTypes from '../actions/actionTypes';

export default function detailsReducer(state = [], action) {
  let details = state;
  if (action.type === actionTypes.LOAD_DETAILS) {
    details = action.details?.lyrics_body?.split('\n');
  }
  return details;
}
