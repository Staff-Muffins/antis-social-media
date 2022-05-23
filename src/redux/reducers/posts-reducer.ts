// IMPORT PICTURES FOR NEW POST
import { IPost } from "../models";
import { InferActionsTypes } from "../store";

// INITIAL STATE
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
          text: "Super cool",
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

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const postsReducer = (
  state: initialStateType = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case "ADD_POST": {
      // ADD POST
      let newPost = {
        id: 1,
        description: "",
        likes: 10,
        reaction: 10,
        comments: [
          {
            id: 1,
            text: "Super cool 2",
            user: {
              id: 1,
              firstName: "Test 2",
              lastName: "Test 2",
            },
          },
        ],
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

// action creators
type ActionType = InferActionsTypes<typeof actions>;
export const actions = {
  // ADD POST ACTION CREATOR
  addPostActionCreator: (newPost: IPost) =>
    ({
      type: "ADD_POST",
      newPost,
    } as const),
};

export default postsReducer;
