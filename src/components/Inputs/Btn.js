import React from 'react';
import T from 'prop-types';

const Btn = ({ label, type, modificator, onClick }) => {
  const btnStyles = () => {
    return `btn btn--${modificator}`;
  };

  return (
    <button className={btnStyles()} type={type} aria-label={label} onClick={onClick}>
      {label}
    </button>
  );
};

Btn.propTypes = {
  label: T.string.isRequired,
  type: T.string.isRequired,
  modificator: T.string.isRequired,
  onClick: T.func.isRequired,
};

export default Btn;
