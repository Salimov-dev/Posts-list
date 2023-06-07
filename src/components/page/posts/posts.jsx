import React, { useMemo, useState } from "react";
// libraries
import { useSelector } from "react-redux";
import _ from "lodash";
// components
import PostCard from "./components/post-card";
import Pagination from "../../common/pagination/Pagination";
import SearchForm from "../../UI/navbar/components/search-form";
import QuantityOnPage from "./components/quantity-on-page";
import Switch from "../../common/switch";
// store
import { getPosts } from "../../../store/posts.store";
import { getUsers } from "../../../store/users.store";
import { getComments } from "../../../store/comments.store";
// utils
import { paginate } from "../../../utils/paginate";
// mock
import { quantityOnPageOptions } from "../../../mockData/quantity-on-page-options";

const Posts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSort, setIsSort] = useState(false);
  const [quantityOnPage, setQuantityOnPage] = useState(5);
  const [pageSizePagination, setPageSizePagination] = useState(quantityOnPage);
  const [currentPage, setCurrentPage] = useState(1);

  const posts = useSelector(getPosts());
  const users = useSelector(getUsers());
  const comments = useSelector(getComments());

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

  return (
    <>
      <div className="container p-3">
        <div className="d-flex gap-3 align-items-center mb-2">
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
            <PostCard post={post} users={users} comments={comments} />
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

export default Posts;
