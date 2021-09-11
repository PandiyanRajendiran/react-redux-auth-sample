import { put, takeLatest, delay } from 'redux-saga/effects';
import { userSessionActions as actions } from '.';

/**
 * Github repos request/response handler
 */
export function* updateUserSessions(payload) {
  // Select username from store
  yield put(actions.setUserDetails({ payload }));
}

/**
 * Root saga manages watcher lifecycle
 */
export function* userSessionSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(actions.setUserDetails.type, updateUserSessions);
}
