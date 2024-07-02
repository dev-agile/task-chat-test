import { takeEvery } from 'redux-saga/effects';
import { fetchCommentsSaga ,sendCommentsSaga,deleteCommentsSaga,editCommentsSaga } from './commentsSaga';

import * as types from '../action/actionTypes';

export function* watchFetchDataSaga() {
    yield takeEvery(types.FETCH_COMMENTS_REQUEST, fetchCommentsSaga);
    yield takeEvery(types.SEND_COMMENTS_REQUEST, sendCommentsSaga);
    yield takeEvery(types.DELETE_COMMENTS_REQUEST, deleteCommentsSaga);
    yield takeEvery(types.EDIT_COMMENTS_REQUEST, editCommentsSaga);
}