import actionTypes from '../actions/actionTypes';

export default function sonaryReducer(state = [], action) {
  let sonary = state;
  if (action.type === actionTypes.LOAD_DASHBOARD) {
    sonary = action.dashboard?.map(({ track }) => track);
  }
  return sonary;
}
