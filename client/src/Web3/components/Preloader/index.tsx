import React from 'react';

import staticStyles from './style';

interface PreloaderProps {
  withText?: boolean;
  darkElementBackground?: boolean;
}

export default function Preloader({ withText, darkElementBackground }: PreloaderProps) {

  return (
    <div
    >
      {withText && (
        <div className="Preloader__text">
          <h4>Please wait</h4>
          <p>We are loading something for you</p>
        </div>
      )}
      <div className="Preloader__dots">
        <div className="Preloader__dot" />
        <div className="Preloader__dot" />
        <div className="Preloader__dot" />
        <div className="Preloader__dot" />
      </div>
    </div>
  );
}
