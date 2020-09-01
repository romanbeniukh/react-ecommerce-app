import React from 'react';
import T from 'prop-types';

const WithLabel = ({ label, children }) => (
  <>
    <span className="page-label">{label}</span>
    {children}
  </>
);

WithLabel.propTypes = {
  label: T.string.isRequired,
  children: T.element.isRequired,
};

export default WithLabel;
