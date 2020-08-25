import React from 'react';
import LoaderSpinner from 'react-loader-spinner';
import useBodyOverflow from '../../hooks/useBodyOverflow';

const Loader = () => {
  useBodyOverflow(true);

  return (
    <div className="loader">
      <LoaderSpinner type="Oval" color="#000" height={100} width={100} />
    </div>
  );
};

export default Loader;
