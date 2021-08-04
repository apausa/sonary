/* eslint-disable camelcase */
import actionTypes from './actionTypes';

export default function loadInformation() {
  return async (dispatch) => {
    const response = await fetch('https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=callback&page_size=5&country=us&f_has_lyrics=f_has_lyrics&apikey=b6147311dbfaffd8721603c89d845ed8');
    let mod = await response.text();
    mod = await mod.substring(9, (mod.length - 2));
    const { message: { body: { track_list } } } = await JSON.parse(mod);
    dispatch({
      type: actionTypes.LOAD_INFORMATION,
      dashboard: track_list
    });
  };
}
