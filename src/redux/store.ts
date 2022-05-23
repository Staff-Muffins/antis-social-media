import thunk from "redux-thunk";
import postsReducer from "./reducers/posts-reducer";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

// IMPORT REDUX FEATURES
const { createStore, combineReducers, applyMiddleware } = require("redux");

// REDUCERS TO STATE
let reducers = combineReducers({
  posts: postsReducer,
});

type reducersType = typeof combineReducers;
export type RootState = ReturnType<reducersType>;
// CREATE STORE
let store = createStore(reducers, applyMiddleware(thunk));
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// ACTIONS CREATORS TYPES
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

// THUNK TYPE
export type BaseThunkType<A extends Action> = ThunkAction<
  void,
  RootState,
  unknown,
  A
>;

export default store;
