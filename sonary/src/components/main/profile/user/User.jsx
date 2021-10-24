import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../logout/LogoutButton';

export default function User() {
  const { user, isLoading } = useAuth0();

  if (isLoading) return <div className="profile__loading">Loading...</div>;
  return (
    <aside className="profile__user">
      <div className="user__main">
        <img className="main__figure" src={user.picture} alt={user.name} />
        <div className="main__information">
          <div>
            <h2 className="information__title">{user.name}</h2>
            <p className="information__mail">
              {user.email}
            </p>
          </div>
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
}
