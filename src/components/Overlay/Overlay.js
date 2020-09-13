import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import useBodyOverflow from '../../hooks/useBodyOverflow';

const Overlay = ({ full }) => {
  useBodyOverflow(true);

  const styles = classNames('page-overlay', {
    'page-overlay--full': full,
  });

  return <div className={styles} />;
};

Overlay.defaultProps = {
  full: false,
};

Overlay.propTypes = {
  full: T.bool,
};

export default Overlay;
