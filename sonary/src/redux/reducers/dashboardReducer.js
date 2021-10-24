import actionTypes from '../actions/actionTypes';

export default function dashboardReducer(state = [], action) {
  let dashboard = state;
  if (action.type === actionTypes.LOAD_DASHBOARD) {
    dashboard = action?.dashboard?.map(({ track }) => track);
  }
  return dashboard;
}
