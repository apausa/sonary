/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import actionTypes from '../../../../redux/actions/actionTypes';

export default function Favorites() {
  const favoritesL = useSelector((store) => store.favorites);
  const dispatch = useDispatch();
  const [favorites, setCurrentTrack] = useState(favoritesL);
  // eslint-disable-next-line no-unused-vars
  const { user, isLoading } = useAuth0();
  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    setCurrentTrack(favoritesL);
  }, [favoritesL]);
  function toggleFav(track) {
    dispatch({
      type: actionTypes.TOGGLE_FAVORITES,
      track
    });
  }

  function getFavClass(track) {
    const isFav = favorites.some((song) => song === track);
    return isFav ? 'track__button--true' : '';
  }

  return (
    <ul className="favorites">
      {
        favorites.map((track) => (
          <li className="track__element" key={track.track_id}>
            <ul>
              <li>
                <figure
                  className="element__thumbnail"
                  style={{ backgroundColor: `#${randomColor()}` }}
                />
              </li>
            </ul>
            <ul className="element__information">
              <li className="information__track">{track.track_name}</li>
              <li className="information__artist">{track.artist_name}</li>
            </ul>
            <button
              type="button"
              className={`track__button ${getFavClass(track)}`}
              onClick={() => toggleFav(track)}
            >
              +
            </button>
          </li>
        ))
      }
    </ul>
  );
}
