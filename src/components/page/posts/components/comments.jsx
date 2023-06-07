import React from "react";
import { useDispatch } from "react-redux";
import { loadCommentsList } from "../../../../store/comments.store";
import { generatePhotoNumber } from "../../../../utils/generate-photo-number";
import { makeUpperCaseFirstSymbol } from "../../../../utils/make-upper-sase-first-symbol";
import { makeLowerCaseFirstSymbol } from "../../../../utils/make-lower-sase-first-symbol copy";

const Comments = ({ comments, post }) => {
  const dispatch = useDispatch();

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

      <div className="collapse" id={randomId}>
        <div className="card card-body">
          {comments.map((comment, index) => {
            return (
              <div key={comment.id}>
                <div className="d-flex p-3 gap-2 myCard">
                  <div style={{ width: "50px" }}>
                    <img
                      className="card-img pt-1"
                      style={{ minWidth: "50px" }}
                      src={`https://randomuser.me/api/portraits/men/${generatePhotoNumber()}.jpg`}
                      alt="Аватарка"
                    />
                  </div>
                  <div>
                    <h5 className="mb-1">
                      {makeUpperCaseFirstSymbol(comment.name)}
                    </h5>
                    <h6>{makeLowerCaseFirstSymbol(comment.email)}</h6>
                    <p>{comment.body}</p>
                  </div>
                </div>
                {index !== comments.length - 1 && <hr />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
