import React from "react";
import { generatePhotoNumber } from "../../../../utils/generate-photo-number";
import { makeUpperCaseFirstSymbol } from "../../../../utils/make-upper-sase-first-symbol";

const CardContent = ({ post, users }) => {
  const getUserName = (id) => {
    return users?.find((user) => user.id === id)?.name;
  };

  return (
    <div className="d-flex ">
      <div>
        <img
          className="card-img"
          src={`https://randomuser.me/api/portraits/women/${generatePhotoNumber()}.jpg`}
          alt="Аватарка"
        />
      </div>
      <div className="w-100 ps-3">
        <h2 className="card-title">{makeUpperCaseFirstSymbol(post.title)}</h2>
        <h5 className="card-subtitle mb-2">{getUserName(post.userId)}</h5>
        <p className="card-text">{makeUpperCaseFirstSymbol(post.body)}</p>
      </div>
    </div>
  );
};

export default CardContent;
