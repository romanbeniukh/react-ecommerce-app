export const createSagaInjector = (runSaga, rootSaga) => {
  const injectedSagas = new Map();

  const isInjected = key => injectedSagas.has(key);

  const injectSaga = (key, saga, ...args) => {
    if (isInjected(key)) {
      return;
    }
    const task = runSaga(saga, ...args);
    injectedSagas.set(key, task);
  };

  const ejectSaga = key => {
    const task = injectedSagas.get(key);

    if (task && task.isRunning()) {
      task.cancel();
    }

    injectedSagas.delete(key);
  };

  if (rootSaga) {
    injectSaga('root', rootSaga);
  }

  return { injectSaga, ejectSaga, runSaga };
};
