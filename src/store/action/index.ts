import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  SEND_COMMENTS_REQUEST,
  SEND_COMMENTS_SUCCESS,
  SEND_COMMENTS_FAILURE,
  CommentsActionTypes,
  DELETE_COMMENTS_REQUEST,
  DELETE_COMMENTS_SUCCESS,
  DELETE_COMMENTS_FAILURE,
  EDIT_COMMENTS_REQUEST,
  EDIT_COMMENTS_SUCCESS,
  EDIT_COMMENTS_FAILURE
} from "./actionTypes";

export const fetchCommentsRequest = (): CommentsActionTypes => ({
  type: FETCH_COMMENTS_REQUEST,
});

export const fetchCommentsSuccess = (data: any): CommentsActionTypes => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: data,
});

export const fetchCommentsFailure = (error: string): CommentsActionTypes => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});

export const sendCommentsRequest = (data:any): CommentsActionTypes => ({
  type: SEND_COMMENTS_REQUEST,
  payload:data
});

export const sendCommentsSuccess = (data: any): CommentsActionTypes => ({
  type: SEND_COMMENTS_SUCCESS,
  payload: data,
});

export const sendCommentsFailure = (error: string): CommentsActionTypes => ({
  type: SEND_COMMENTS_FAILURE,
  payload: error,
});

export const deleteCommentsRequest = (data:any): CommentsActionTypes => ({
  type: DELETE_COMMENTS_REQUEST,
  payload:data
});

export const deleteCommentsSuccess = (data: any): CommentsActionTypes => ({
  type: DELETE_COMMENTS_SUCCESS,
  payload: data,
});

export const deleteCommentsFailure = (error: string): CommentsActionTypes => ({
  type: DELETE_COMMENTS_FAILURE,
  payload: error,
});


export const editCommentsRequest = (data:any): CommentsActionTypes => ({
  type: EDIT_COMMENTS_REQUEST,
  payload:data
});

export const editCommentsSuccess = (data: any): CommentsActionTypes => ({
  type: EDIT_COMMENTS_SUCCESS,
  payload: data,
});

export const editCommentsFailure = (error: string): CommentsActionTypes => ({
  type: EDIT_COMMENTS_FAILURE,
  payload: error,
});

