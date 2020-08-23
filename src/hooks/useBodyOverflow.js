import { useEffect } from 'react';

const useBodyOverflow = bool => {
  useEffect(() => {
    if (bool) {
      document.body.className = 'overflow-hidden';
      return () => {
        document.body.className = '';
      };
    }
    return () => null;
  });
};

export default useBodyOverflow;
