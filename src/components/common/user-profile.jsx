import React from "react";
import { generatePhotoNumber } from "../../utils/generate-photo-number";

const UserProfile = ({ array }) => {
  return (
    <div className="card mb-2 p-3 bg-info-subtle fs-5">
      <h4 className="card-title">Информация о пользователе:</h4>
      <div className="d-flex">
        <div>
          <img
            className="card-img pt-2"
            role="button"
            src={`https://randomuser.me/api/portraits/women/${generatePhotoNumber()}.jpg`}
            alt="Аватарка"
          />
        </div>
        <div className="d-flex flex-column ps-3">
          {array.map((el) => {
            return (
              <span key={el.header}>
                <strong>{el.header}:</strong> {el.item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
