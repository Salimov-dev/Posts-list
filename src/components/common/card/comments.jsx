import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getComments,
  getCommentsStatus,
  loadCommentsList,
} from "../../../store/comments.store";
import Comment from "./comment";
import Loader from "../loader";

const Comments = ({ post }) => {
  const comments = useSelector(getComments());
  const isLoading = useSelector(getCommentsStatus());
  const dispatch = useDispatch();
  // console.log("comments", comments);

  const handleLoadComments = (postId) => {
    dispatch(loadCommentsList(postId));
  };

  // START generate random ID for collapse
  const generateRandomLetters = () => {
    let length = 3;
    let result = " ";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  let randomId = (
    generateRandomLetters() + Math.round(Math.random() * (100 - 1) + 1)
  )
    .replace(" ", "")
    .trim();
  // END generate random ID for collapse

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
