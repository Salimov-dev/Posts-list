import React from "react";
// libraries
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// utils
import { generatePhotoNumber } from "../../../utils/generate-photo-number";
import { makeUpperCaseFirstSymbol } from "../../../utils/make-upper-sase-first-symbol";
// store
import { getUserName } from "../../../store/users.store";

const CardContent = ({ post, onOpenUserPage }) => {
  let userName = "";
  const getAuthorName = (userId) => {
    return (userName = useSelector(getUserName(userId)));
  };

  return (
    <div className="d-flex">
      <div>
        <NavLink to={`/user/${post.userId}`}>
          <img
            onClick={() => onOpenUserPage(post.userId)}
            className="card-img"
            role="button"
            src={`https://randomuser.me/api/portraits/women/${generatePhotoNumber()}.jpg`}
            alt="Аватарка"
          />
        </NavLink>
      </div>
      <div className="w-100 ps-3">
        <h2 className="card-title">{makeUpperCaseFirstSymbol(post.title)}</h2>
        <h5 className="card-subtitle mb-2">{getAuthorName(post.userId)}</h5>
        <p className="card-text">{makeUpperCaseFirstSymbol(post.body)}</p>
      </div>
    </div>
  );
};

export default CardContent;
