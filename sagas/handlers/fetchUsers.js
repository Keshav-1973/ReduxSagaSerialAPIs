import {call, put, all, takeLeading, takeLatest} from 'redux-saga/effects';
import fetchGetUsersTwo from '../requests/fetchPosts';
import fetchGetUsers from '../requests/fetchUsers';

function* handleGetUsers() {
  try {
    const posts = yield call(fetchGetUsersTwo);
    console.log('I got Executed First');
    const users = yield call(fetchGetUsers);
    console.log('I got Executed Second');
    yield all([
      put({type: 'GET_USERS_SUCCESS', users: users}),
      put({type: 'GET_POSTS_SUCCESS', posts: posts}),
    ]);
  } catch (err) {
    yield put({type: 'GET_USERS_FAILED', message: err.message});
  }
}

function* watcherUserSaga() {
  yield takeLeading('GET_POSTS_REQUESTED', handleGetUsers);
  yield takeLatest('GET_USERS_REQUESTED', handleGetUsers);
}

export default watcherUserSaga;
