import actionTypes from '../actions/actionTypes';

export default function sonaryReducer(state = [], action) {
  let sonary = state;
  if (action.type === actionTypes.LOAD_DASHBOARD) {
    const dashboard = action.dashboard?.map(({ track }) => track);
    sonary = dashboard;
  }
  return sonary;
}
