/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import actionTypes from './actionTypes';

export function loadDashboard() {
  return async (dispatch) => {
    const response = await fetch(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=callback&page_size=15&country=wx&f_has_lyrics=1&apikey=${process.env.API_KEY}`);
    let mod = await response.text();
    mod = await mod.substring(9, (mod.length - 2));
    const dashboard = await JSON.parse(mod).message.body.track_list;
    dispatch({
      type: actionTypes.LOAD_DASHBOARD,
      dashboard
    });
  };
}
