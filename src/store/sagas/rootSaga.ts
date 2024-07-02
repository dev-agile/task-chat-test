import { all } from 'redux-saga/effects';
import {watchFetchDataSaga} from './index';

export default function* rootSaga() {
  yield all([
    watchFetchDataSaga()
  ])
};