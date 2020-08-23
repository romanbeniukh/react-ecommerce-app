import React from 'react';
import T from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <h1 className="page-title">{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: T.string.isRequired,
  children: T.element.isRequired,
};

export default Section;
