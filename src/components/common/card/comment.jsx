import React from "react";
import { makeLowerCaseFirstSymbol } from "../../../utils/make-lower-sase-first-symbol copy";
import { makeUpperCaseFirstSymbol } from "../../../utils/make-upper-sase-first-symbol";
import { generatePhotoNumber } from "../../../utils/generate-photo-number";

const Comment = ({ comments, comment, index, post }) => {
  return (
    <>
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
          <h5 className="mb-1">{makeUpperCaseFirstSymbol(comment.name)}</h5>
          <h6>{makeLowerCaseFirstSymbol(comment.email)}</h6>
          <p>{comment.body}</p>
        </div>
      </div>
      {index !== comments[post?.id].length - 1 && <hr />}
    </>
  );
};

export default Comment;
