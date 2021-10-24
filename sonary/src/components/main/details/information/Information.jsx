/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadDashboard } from '../../../../redux/actions/dashboardCreator';
import '../detailsStyles.scss';

export default function Information() {
  const tracks = useSelector((store) => store.sonary);
  const dispatch = useDispatch();
  const { track_id } = useParams();
  const [foundTrack, setFoundTrack] = useState();

  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    if (!tracks.length) dispatch(loadDashboard());
  }, []);

  useEffect(() => {
    const x = (tracks.find((track) => track.track_id === +track_id));
    setFoundTrack(x);
  }, [track_id, tracks]);

  return (
    <div className="details__information">
      <aside className="information__main">
        <figure className="main__figure" style={{ backgroundColor: `#${randomColor()}` }} />
        <ul className="main__track">
          <li className="track__title">{foundTrack?.track_name}</li>
          <li className="track__artist">{foundTrack?.artist_name}</li>
        </ul>
      </aside>
    </div>
  );
}
