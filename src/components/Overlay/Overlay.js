import React from 'react';
import useBodyOverflow from '../../hooks/useBodyOverflow';

const Overlay = () => {
  useBodyOverflow(true);

  return <div className="page-overlay" />;
};

export default Overlay;
