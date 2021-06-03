import { fork } from 'redux-saga/effects';
import { routingWorker } from './routing';

export function* rootSaga() {
  yield fork(routingWorker);
}

