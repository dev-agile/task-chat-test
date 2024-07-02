export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export const SEND_COMMENTS_REQUEST = "SEND_COMMENTS_REQUEST";
export const SEND_COMMENTS_SUCCESS = "SEND_COMMENTS_SUCCESS";
export const SEND_COMMENTS_FAILURE = "SEND_COMMENTS_FAILURE";

export const DELETE_COMMENTS_REQUEST = "DELETE_COMMENTS_REQUEST";
export const DELETE_COMMENTS_SUCCESS = "DELETE_COMMENTS_SUCCESS";
export const DELETE_COMMENTS_FAILURE = "DELETE_COMMENTS_FAILURE";

export const EDIT_COMMENTS_REQUEST = "EDIT_COMMENTS_REQUEST";
export const EDIT_COMMENTS_SUCCESS = "EDIT_COMMENTS_SUCCESS";
export const EDIT_COMMENTS_FAILURE = "EDIT_COMMENTS_FAILURE";

interface FetchCommentsRequestAction {
  type: typeof FETCH_COMMENTS_REQUEST;
}

interface FetchCommentsSuccessAction {
  type: typeof FETCH_COMMENTS_SUCCESS;
  payload: any;
}

interface FetchCommentsFailureAction {
  type: typeof FETCH_COMMENTS_FAILURE;
  payload: string;
}

interface SendCommentsRequestAction {
  type: typeof SEND_COMMENTS_REQUEST;
  payload: any;
}

interface SendCommentsSuccessAction {
  type: typeof SEND_COMMENTS_SUCCESS;
  payload: any;
}

interface SendCommentsFailureAction {
  type: typeof SEND_COMMENTS_FAILURE;
  payload: string;
}

interface DeleteCommentsRequestAction {
  type: typeof DELETE_COMMENTS_REQUEST;
  payload: any;
}

interface DeleteCommentsSuccessAction {
  type: typeof DELETE_COMMENTS_SUCCESS;
  payload: any;
}

interface DeleteCommentsFailureAction {
  type: typeof DELETE_COMMENTS_FAILURE;
  payload: string;
}

interface EditCommentsRequestAction {
  type: typeof EDIT_COMMENTS_REQUEST;
  payload: any;
}

interface EditCommentsSuccessAction {
  type: typeof EDIT_COMMENTS_SUCCESS;
  payload: any;
}

interface EditCommentsFailureAction {
  type: typeof EDIT_COMMENTS_FAILURE;
  payload: string;
}

export type CommentsActionTypes =
  | FetchCommentsRequestAction
  | FetchCommentsSuccessAction
  | FetchCommentsFailureAction
  | SendCommentsRequestAction
  | SendCommentsSuccessAction
  | SendCommentsFailureAction
  | DeleteCommentsRequestAction
  | DeleteCommentsSuccessAction
  | DeleteCommentsFailureAction
  | EditCommentsRequestAction
  | EditCommentsSuccessAction
  | EditCommentsFailureAction;
