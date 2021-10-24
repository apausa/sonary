/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */

import actionTypes from '../actions/actionTypes';
import { initializeLocalStorage, saveFavouritesToLocalStorage } from '../actions/localStorageCreator';

export default function favoriteReducer(favorites = initializeLocalStorage(), action) {
  let profile = favorites;
  if (action.type === actionTypes.LOAD_FAVORITES) profile = action.favouriteTracks;
  if (action.type === actionTypes.TOGGLE_FAVORITES) {
    const favoritesIds = favorites.map(({ track_id }) => track_id);
    profile = (favoritesIds.some((id) => id === action.track.track_id))
      ? favorites.filter((currentTrack) => currentTrack.track_id !== action.track.track_id)
      : [...favorites, action.track];
    saveFavouritesToLocalStorage(profile);
  }
  return profile;
}
