import { useEffect } from 'react';
import { store } from '../redux/store';

const useInjectSaga = (key, saga, ...args) => {
  useEffect(() => {
    store.injectSaga(key, saga, ...args);

    return () => {
      store.ejectSaga(key);
    };
    // eslint-disable-next-line
  }, [key, saga]);
};

export default useInjectSaga;
