import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    const path = e.path || (e.composedPath && e.composedPath());

    if (ref.current && !ref.current.contains(e.target) && path.indexOf(ref.current) === -1) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
