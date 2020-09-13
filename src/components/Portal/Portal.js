import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import T from 'prop-types';

const Portal = ({ children, el = 'div' }) => {
  const [container] = useState(document.createElement(el));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

Portal.propTypes = {
  el: T.string,
  children: T.element.isRequired,
};

export default Portal;
