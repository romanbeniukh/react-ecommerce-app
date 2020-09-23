import { useEffect, useCallback, useRef } from 'react';
import { store } from '../redux/store';

const useRunSaga = (saga, cancelOnUnmount) => {
  const taskRef = useRef(null);

  useEffect(
    () => () => {
      if (cancelOnUnmount && taskRef.current) {
        taskRef.current.cancel();
      }
    },
    // eslint-disable-next-line
    [],
  );

  return useCallback((...args) => {
    if (taskRef.current && taskRef.current.isRunning()) {
      taskRef.current.cancel();
    }

    taskRef.current = store.runSaga(saga, ...args);

    return taskRef.current.toPromise();
    // eslint-disable-next-line
  }, []);
};

export default useRunSaga;
