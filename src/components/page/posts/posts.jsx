import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../../store/posts.store";
import { getUsers } from "../../../store/users.store";
import { getComments } from "../../../store/comments.store";
import PostCard from "./components/post-card";
import { getSearchQuery } from "../../../store/searchQuery.store";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination/Pagination";
import SearchForm from "../../UI/navbar/components/search-form";
import QuantityOnPage from "./components/quantity-on-page";

const Posts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [quantityOnPage, setQuantityOnPage] = useState(5);
  const [sortBy, setSortBy] = useState({ path: "", order: "" });
  const [pageSizePagination, setPageSizePagination] = useState(quantityOnPage);
  const [currentPage, setCurrentPage] = useState(1);

  const posts = useSelector(getPosts());
  const users = useSelector(getUsers());
  const comments = useSelector(getComments());
  const quantityOnPageArray = [5, 10, 25, 50];

  const searchedPosts = useMemo(() => {
    let searchedPostsArray = [];

    searchedPostsArray = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return searchedPostsArray;
  }, [searchQuery]);

  const postsList = searchedPosts.length > 0 ? searchedPosts : posts;
  const count = postsList.length;
  let postsCrop = paginate(postsList, currentPage, pageSizePagination);

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
            quantityOnPageArray={quantityOnPageArray}
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
