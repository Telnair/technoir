import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { router } from './routes';
import { router5Middleware, router5Reducer } from 'redux-router5';
import { rootSaga } from './sagas';
import { createLogger } from 'redux-logger';
import browserPlugin from 'router5-plugin-browser';

const logger = createLogger({});
const sagaMiddleware = createSagaMiddleware({ context: { router } });

export const store = configureStore({
  reducer: {
    router: router5Reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)
      .concat(sagaMiddleware)
      .concat(router5Middleware(router))
});

sagaMiddleware.run(rootSaga);

router.usePlugin(browserPlugin());
router.start();

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;