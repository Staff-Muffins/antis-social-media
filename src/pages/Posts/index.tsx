import React from "react";
import { connect } from "react-redux";
import { IPost } from "../../redux/models";
import { actions } from "../../redux/reducers/posts-reducer";
import { AppDispatch, RootState } from "../../redux/store";

interface IProps {
  posts: IPost[];
  addPost: (post: IPost) => void;
}

const PostsPage = ({ posts, addPost }: IProps) => {
  console.log("Posts:", posts);
  console.log("Add post:", addPost);
  return (
    <div className="posts-container">
      <h1>This is posts page</h1>
    </div>
  );
};

let mapStateToProps = (state: RootState) => {
  /* posts initial state */
  return {
    posts: state.posts,
  };
};

let mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    /* add post function */
    addPost: (post: IPost) => {
      dispatch(actions.addPostActionCreator(post));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
