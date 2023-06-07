import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../../store/posts.store";
import { getUsers } from "../../../store/users.store";
import { getComments } from "../../../store/comments.store";
import PostCard from "./components/post-card";

const Posts = () => {
  const [sortBy, setSortBy] = useState({ path: "", order: "" });
  const [pageSizePagination, setPageSizePagination] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const posts = useSelector(getPosts());
  const users = useSelector(getUsers());
  const comments = useSelector(getComments());

  return (
    <div className="container p-3">
      {posts?.map((post) => (
        <div key={post.id} className="card p-3 mb-3 myCard">
          <PostCard post={post} users={users} comments={comments} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
