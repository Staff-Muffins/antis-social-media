// IMPORT PICTURES FOR NEW POST
import { IPost } from "../models";
import { InferActionsTypes } from "../store";

/* Initial state */
let initialState = {
  posts: [
    {
      id: 1,
      description: "",
      likes: 10,
      reaction: 10,
      comments: [
        {
          id: 1,
          text: "Super cool 1",
          user: {
            id: 1,
            firstName: "Test",
            lastName: "Test",
          },
        },
        {
          id: 2,
          text: "Super cool 2",
          user: {
            id: 1,
            firstName: "Test",
            lastName: "Test",
          },
        },
        {
          id: 3,
          text: "Super cool 3",
          user: {
            id: 1,
            firstName: "Test",
            lastName: "Test",
          },
        },
      ],
    },
  ] as IPost[],
};

type initialStateType = typeof initialState;

/* Reducer and all actions */
const postsReducer = (
  state: initialStateType = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case "ADD_POST": {
      let newPost = {
        id: state.posts[postsReducer.length + 1].id + 1,
        description: action.post.description,
        likes: action.post.likes,
        reaction: action.post.reaction,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    default:
      return state;
  }
};

/* Actions creators */
type ActionType = InferActionsTypes<typeof actions>;

export const actions = {
  /* Action for adding a new post */
  addPostActionCreator: (post: IPost) =>
    ({
      type: "ADD_POST",
      post,
    } as const),
};

export default postsReducer;
