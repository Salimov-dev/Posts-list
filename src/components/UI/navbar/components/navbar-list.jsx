import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSelectedUserId } from "../../../../store/selected-user.store";

const NavbarList = () => {
  const [data, setData] = useState(0);
  const selectedUser = useSelector(getSelectedUserId());

  const navbarItemsArr = [
    {
      _id: 1,
      route: "/",
      text: "Посты",
    },
    {
      _id: 2,
      route: data ? `/user/${data}` : "/user/:userId?",
      text: "Пользователь",
    },
    {
      _id: 3,
      route: "/developer",
      text: "О разработчике",
    },
  ];

  useEffect(() => {
    setData(localStorage.getItem("selected-user-id"));
  }, [selectedUser]);

  return (
    <nav className="navbar-nav flex-row gap-3 me-3">
      {navbarItemsArr.map((item) => {
        return (
          <li key={item._id} className="nav-item">
            <NavLink to={item.route} className="nav-link">
              {item.text}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
};

export default NavbarList;
