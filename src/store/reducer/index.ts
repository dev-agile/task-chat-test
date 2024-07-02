import { combineReducers } from 'redux';
import { commentsReducer,CommentsState } from './commentsReducer';
export interface RootState {
    comments: CommentsState;
}
const rootReducer = combineReducers({
    comments: commentsReducer,
});

export default rootReducer;
