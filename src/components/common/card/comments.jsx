import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getComments,
  getCommentsStatus,
  loadCommentsList,
} from "../../../store/comments.store";
import Comment from "./comment";
import Loader from "../loader";
import useRandom from "../../hooks/useRandom";

const Comments = ({ post }) => {
  const comments = useSelector(getComments());
  const isLoading = useSelector(getCommentsStatus());
  const randomId = useRandom();
  const dispatch = useDispatch();

  const handleLoadComments = (postId) => {
    if (comments[`${postId}`] === undefined) {
      return dispatch(loadCommentsList(postId));
    }
  };

  return (
    <div className="d-flex flex-column align-items-end">
      <p>
        <button
          className="btn btn-outline-success"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + randomId}
          aria-expanded="false"
          aria-controls={randomId}
          onClick={() => handleLoadComments(post.id)}
        >
          {`Комментарии`}
        </button>
      </p>

      <div className="collapse w-100" id={randomId}>
        <div className="card card-body">
          {!isLoading ? (
            comments[post?.id]?.map((comment, index) => {
              return (
                <div key={comment.id}>
                  <Comment
                    comments={comments}
                    post={post}
                    comment={comment}
                    index={index}
                  />
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
