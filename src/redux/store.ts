import thunk from "redux-thunk";
import postsReducer from "./reducers/posts-reducer";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/* Redux features */
const { createStore, combineReducers, applyMiddleware } = require("redux");

/* Redux to state */
let reducers = combineReducers({
  posts: postsReducer,
});

type reducersType = typeof combineReducers;
export type RootState = ReturnType<reducersType>;

/* Creation of the store */
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

/* Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState} */
export type AppDispatch = typeof store.dispatch;

/* Action creator types */
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

/* Thunk type */
export type BaseThunkType<A extends Action> = ThunkAction<
  void,
  RootState,
  unknown,
  A
>;

export default store;
