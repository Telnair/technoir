import { takeEvery } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import { actions, actionTypes } from 'redux-router5';
import { put, delay } from 'redux-saga/effects';
import { constants } from 'router5';
import { Route } from '../../routes';

const unknownRoutePattern = (action: AnyAction) =>
  action.type === actionTypes.TRANSITION_SUCCESS && action.payload.route.name === constants.UNKNOWN_ROUTE;

function* unknownRouteWorker() {
  yield delay(0);
  yield put(actions.navigateTo(Route.Home));
}

export function* routingWorker() {
  yield takeEvery(unknownRoutePattern, unknownRouteWorker);
}