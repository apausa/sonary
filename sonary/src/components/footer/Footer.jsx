/* eslint-disable import/order */
import React from 'react';
import logo from './sonary.svg';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <figure className="footer__sonary">
        <a className="sonary__anchor" href="/dashboard">
          <img className="anchor__icon" alt="sonary icon" src={logo} />
        </a>
      </figure>
    </footer>
  );
}
