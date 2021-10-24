/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import actionTypes from '../../../../redux/actions/actionTypes';

export default function Favorites() {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth0();
  const favoritesL = useSelector((store) => store.favorites);
  const [favorites, setCurrentTrack] = useState(favoritesL);
  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
  const toggleFav = (track) => dispatch({ type: actionTypes.TOGGLE_FAVORITES, track });
  const getFavClass = (track) => ((favorites
    .some((song) => song === track)) ? 'track__button--true' : '');
  useEffect(() => { setCurrentTrack(favoritesL); }, [favoritesL]);

  if (isLoading) return <div>Loading...</div>;
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
