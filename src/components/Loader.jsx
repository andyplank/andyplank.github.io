import React, { useState } from 'react';
import './Loader.css';

// Don't need prop checking here
// eslint-disable-next-line react/prop-types
const PreLoader = ({ loading }) => {
  const [fading, setFading] = useState(true);

  setTimeout(() => {
    setFading(false);
  }, 1500);

  return (
    <div className={loading ? 'loader_bg' : 'loader_bg hide'}>
      <div className="w-100 h-100 d-flex align-items-center justify-content-center">
        <div className={fading ? 'fade-in' : 'fade-in hide'}>
          <h1>Hello.</h1>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
