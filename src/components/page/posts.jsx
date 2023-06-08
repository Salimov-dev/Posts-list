import React, { useMemo, useState } from "react";
// libraries
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
// components
import PostCard from "../common/card/post-card";
import Pagination from "../common/pagination/Pagination";
import SearchForm from "../UI/navbar/components/search-form";
import QuantityOnPage from "../common/card/quantity-on-page";
import Switch from "../common/switch";
// store
import { getPosts } from "../../store/posts.store";
import { getUsers } from "../../store/users.store";
import { getComments } from "../../store/comments.store";
// utils
import { paginate } from "../../utils/paginate";
// mock
import { quantityOnPageOptions } from "../../mockData/quantity-on-page-options";
import { setSelectedUser } from "../../store/selected-user.store";
import Loader from "../common/loader";

const Posts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSort, setIsSort] = useState(false);
  const [quantityOnPage, setQuantityOnPage] = useState(5);
  const [pageSizePagination, setPageSizePagination] = useState(quantityOnPage);
  const [currentPage, setCurrentPage] = useState(1);

  const posts = useSelector(getPosts());
  const users = useSelector(getUsers());

  const dispatch = useDispatch();

  const searchedPosts = useMemo(() => {
    let searchedPostsArray = [];

    searchedPostsArray = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return searchedPostsArray;
  }, [searchQuery]);

  const postsList = searchedPosts.length > 0 ? searchedPosts : posts;
  const count = postsList.length;
  const sortedPosts = _.orderBy(postsList, [isSort ? "title" : ""]);
  let postsCrop = paginate(sortedPosts, currentPage, pageSizePagination);
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleOpenUserPage = (userId) => {
    dispatch(setSelectedUser(userId));
  };

  return (
    <>
      <div className="container p-3">
        <div className="d-flex gap-3 flex-column-reverse align-items-center mb-2 justify-content-between  flex-lg-row">
          <SearchForm setData={setSearchQuery} className="d-flex" />
          <div className="d-flex gap-3 align-items-center quantityAndSwitch__container">
            <QuantityOnPage
              setPageSizePagination={setPageSizePagination}
              pageSizePagination={pageSizePagination}
              quantityOnPageOptions={quantityOnPageOptions}
            />
            <Switch
              name="sortByHeader"
              onClick={() => setIsSort(!isSort)}
              label="Сортировать"
            />
          </div>
        </div>

        {postsCrop.length > 0 ? (
          postsCrop.map((post) => (
            <div key={post.id} className="card p-3 mb-3 myCard">
              <PostCard
                post={post}
                users={users}
                onOpenUserPage={handleOpenUserPage}
              />
            </div>
          ))
        ) : (
          <div style={{ height: "75vh" }}>
            <Loader />
          </div>
        )}
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

export default Posts;
