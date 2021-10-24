import React from 'react';
import './headerStyles.scss';
import { useAuth0 } from '@auth0/auth0-react';
import logo from './sonary.svg';
import iconUser from './user.svg';

export default function Header() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <header className="header">
      <nav className="header__top">
        <div className="header__aux" />
        <a className="header__sonary" href="/dashboard">
          <img data-testid="logo-image" className="sonary__icon" alt="sonary icon" src={logo} />
        </a>
        <a className="header__profile" href="/profile">
          <img data-testid="profile-image" src={isAuthenticated ? user.picture : iconUser} className="profile__icon" alt="profile icon" />
        </a>
      </nav>
      <div className="header__bottom" />
    </header>
  );
}
