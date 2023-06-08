import React, { useEffect, useMemo, useState } from "react";
// libraries
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { NavLink } from "react-router-dom";
// components
import PostCard from "../common/card/post-card";
import Pagination from "../common/pagination/Pagination";
import SearchForm from "../UI/navbar/components/search-form";
import QuantityOnPage from "../common/card/quantity-on-page";
import Switch from "../common/switch";
// store
import { getPosts } from "../../store/posts.store";
import { getSelectedUser, getUsers } from "../../store/users.store";
import { getComments } from "../../store/comments.store";
import { setSelectedUser } from "../../store/selected-user.store";
// utils
import { paginate } from "../../utils/paginate";
import { generatePhotoNumber } from "../../utils/generate-photo-number";
// mock
import { quantityOnPageOptions } from "../../mockData/quantity-on-page-options";
import UserProfile from "../common/user-profile";

const AboutUser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSort, setIsSort] = useState(false);
  const [quantityOnPage, setQuantityOnPage] = useState(5);
  const [pageSizePagination, setPageSizePagination] = useState(quantityOnPage);
  const [currentPage, setCurrentPage] = useState(1);

  const posts = useSelector(getPosts());
  const users = useSelector(getUsers());
  const comments = useSelector(getComments());
  const dispatch = useDispatch();

  const selectedUserId = JSON.parse(localStorage.getItem("selected-user-id"));
  const selectedUser = useSelector(getSelectedUser(selectedUserId));
  const selectedUserPosts = posts.filter(
    (post) => post.userId === selectedUserId
  );

  const selectedUserTransform = [
    { item: selectedUser?.id, header: "ID" },
    { item: selectedUser?.name, header: "Имя" },
    { item: selectedUser?.username, header: "Логин" },
    { item: selectedUser?.email, header: "E-mail" },
    { item: selectedUser?.phone, header: "Телефон" },
    { item: selectedUser?.address.city, header: "Город" },
    { item: selectedUser?.website, header: "Сайт" },
    { item: selectedUser?.company.name, header: "Название компании" },
  ];

  const searchedPosts = useMemo(() => {
    let searchedPostsArray = [];

    searchedPostsArray = selectedUserPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return searchedPostsArray;
  }, [searchQuery]);

  const postsList =
    searchedPosts.length > 0 ? searchedPosts : selectedUserPosts;
  const count = postsList.length;
  const sortedPosts = _.orderBy(postsList, [isSort ? "title" : ""]);
  let postsCrop = paginate(sortedPosts, currentPage, pageSizePagination);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleOpenUserPage = (userId) => {
    dispatch(setSelectedUser(userId));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container p-3">
        <NavLink to={-1}>
          <button className="btn btn-outline-secondary mb-2">Вернуться к постам</button>
        </NavLink>

        <UserProfile array={selectedUserTransform} />

        <h2 className="mt-4">Все посты пользователя {selectedUser?.name}</h2>
        <div className="d-flex gap-3 align-items-center mb-2 justify-content-between">
          <SearchForm setData={setSearchQuery} />
          <QuantityOnPage
            setPageSizePagination={setPageSizePagination}
            pageSizePagination={pageSizePagination}
            quantityOnPageOptions={quantityOnPageOptions}
          />
          <Switch
            name="sortByHeader"
            onClick={() => setIsSort(!isSort)}
            label="Сортировать по заголовку"
          />
        </div>

        {postsCrop.map((post) => (
          <div key={post.id} className="card p-3 mb-3 myCard">
            <PostCard
              post={post}
              users={users}
              comments={comments}
              onOpenUserPage={handleOpenUserPage}
            />
          </div>
        ))}
      </div>

      <Pagination
        objects={postsCrop}
        itemsCount={count}
        pageSize={pageSizePagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default AboutUser;
