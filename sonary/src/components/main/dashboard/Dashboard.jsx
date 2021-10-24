/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import actionTypes from '../../../redux/actions/actionTypes';
import { loadDashboard } from '../../../redux/actions/dashboardCreator';
import './dashboardStyles.scss';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { tracks, favoriteTracks } = useSelector((store) => ({
    tracks: store.sonary,
    favoriteTracks: store.favorites
  }));

  const [filteredSongs, setFilterSong] = useState();
  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
  const toggleFav = (track) => dispatch({ type: actionTypes.TOGGLE_FAVORITES, track });

  function getFavClass(track) {
    const isFav = favoriteTracks.some((song) => song === track);
    return isFav ? 'button__fav--yes' : '';
  }

  function filterSongs(searchTerm) {
    if (!searchTerm) setFilterSong(tracks);
    else {
      const newSongs = tracks.filter(({ album_name, artist_name, track_name }) => {
        const searchValues = [album_name, artist_name, track_name];
        return searchValues.toString().toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilterSong(newSongs);
    }
  }

  useEffect(() => { if (!tracks.length) dispatch(loadDashboard()); }, []);
  useEffect(() => { setFilterSong(tracks || []); }, [tracks]);

  let ranking = 0;
  return (
    <main className="dashboard">
      <section className="dashboard__top">
        <input type="search" placeholder="Search any song!" data-testid="search-input" onChange={(event) => filterSongs(event.target.value)} className="dashboard__search" />
      </section>
      <ul className="dashboard__bottom">
        {
            filteredSongs && filteredSongs.map((track) => {
              ranking += 1;
              return (
                <li key={track.track_id} className="bottom__track">
                  <ul>
                    <button
                      data-testid={`button-${track.track_id}`}
                      type="button"
                      className={`button__fav ${getFavClass(track)}`}
                      onClick={() => toggleFav(track)}
                    >
                      +
                    </button>
                    <Link className="track__element" to={`/details/${track.track_id}`}>
                      <li className="element__thumbnail" style={{ backgroundColor: `#${randomColor()}` }}>
                        <img src="" alt="" />
                      </li>
                      <li>
                        <ul className="element__information">
                          <li className="information__ranking">
                            #
                            {ranking}
                          </li>
                          <li className="information__track">{track.track_name}</li>
                          <li className="information__artist">{track.artist_name}</li>
                        </ul>
                      </li>
                    </Link>
                  </ul>
                </li>
              );
            })

        }
      </ul>

    </main>
  );
}
