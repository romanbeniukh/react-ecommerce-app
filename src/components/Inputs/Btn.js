import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

const Btn = ({ icon, label, type, modificator, size = 'medium', onClick, disabled }) => {
  const styles = classNames('btn', {
    [`btn--${modificator}`]: modificator,
    'btn--small': size === 'small',
  });

  return (
    <button className={styles} type={type} aria-label={label} onClick={onClick} disabled={disabled}>
      {icon ? <div className="btn__icon">{icon}</div> : label}
    </button>
  );
};

Btn.defaultProps = {
  disabled: false,
  size: 'medium',
  icon: null,
};

Btn.propTypes = {
  size: T.string,
  icon: T.element,
  label: T.string.isRequired,
  type: T.string.isRequired,
  modificator: T.string.isRequired,
  onClick: T.func.isRequired,
  disabled: T.bool,
};

export default Btn;
