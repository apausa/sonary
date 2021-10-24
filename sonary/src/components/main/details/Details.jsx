import React from 'react';
import Information from './information/Information';
import Lyrics from './lyrics/Lyrics';

export default function Details() {
  return (
    <main className="details">
      <Lyrics />
      <Information />
    </main>
  );
}
