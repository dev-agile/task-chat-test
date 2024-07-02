import { call, put, delay } from "redux-saga/effects";
import {
  fetchCommentsSuccess,
  fetchCommentsFailure,
  sendCommentsSuccess,
  sendCommentsFailure,
  fetchCommentsRequest,
  editCommentsSuccess,
  editCommentsFailure,
  deleteCommentsSuccess,
  deleteCommentsFailure,
} from "../action/index";
import axiosInstance from "../../config/axios";

interface ApiResponse {
  id: number;
  name: string;
}

export function* fetchCommentsSaga(): Generator<any, void, ApiResponse> {
  try {
    const data: ApiResponse = yield call(() => {
      return axiosInstance.get("/comments");
    });
    yield put(fetchCommentsSuccess(data));
  } catch (error: any) {
    yield put(fetchCommentsFailure(error.message));
  }
}

export function* sendCommentsSaga({
  payload,
}: any): Generator<any, void, ApiResponse> {
  try {
    const data: ApiResponse = yield call(() => {
      return axiosInstance.post("/comments", payload);
    });
    yield put(sendCommentsSuccess(data));
    yield delay(2000);
    yield put(fetchCommentsRequest());
  } catch (error: any) {
    yield put(sendCommentsFailure(error.message));
  }
}

export function* editCommentsSaga({
  payload,
}: any): Generator<any, void, ApiResponse> {
  try {
    const data: ApiResponse = yield call(() => {
      return axiosInstance.put(`/comment/${payload.id}`, payload);
    });
    yield put(editCommentsSuccess(data));
    yield delay(2000);
    yield put(fetchCommentsRequest());
  } catch (error: any) {
    yield put(editCommentsFailure(error.message));
  }
}

export function* deleteCommentsSaga({
  payload,
}: any): Generator<any, void, ApiResponse> {
  try {
    const data: ApiResponse = yield call(() => {
      return axiosInstance.delete(`/comment/${payload}`);
    });
    yield put(deleteCommentsSuccess(data));
    yield delay(2000);
    yield put(fetchCommentsRequest());
  } catch (error: any) {
    yield put(deleteCommentsFailure(error.message));
  }
}
