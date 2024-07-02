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
} from "../action/actionTypes";

export interface CommentsState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState: CommentsState = {
  loading: false,
  data: null,
  error: null,
};

export const commentsReducer = (
  state = initialState,
  action: CommentsActionTypes
): CommentsState => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case FETCH_COMMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SEND_COMMENTS_REQUEST:
      return { ...state, loading: true, error: null };
    case SEND_COMMENTS_SUCCESS:
      return { ...state, loading: false };
    case SEND_COMMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
      case DELETE_COMMENTS_REQUEST:
        return { ...state, loading: true, error: null };
      case DELETE_COMMENTS_SUCCESS:
        return { ...state, loading: false};
      case DELETE_COMMENTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case EDIT_COMMENTS_REQUEST:
        return { ...state, loading: true, error: null };
      case EDIT_COMMENTS_SUCCESS:
        return { ...state, loading: false };
      case EDIT_COMMENTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
