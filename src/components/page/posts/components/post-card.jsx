import React from "react";
import CardContent from "./card-content";
import Comments from "./comments";

const PostCard = ({ post, users, comments }) => {
  return (
    <>
      <CardContent post={post} users={users} />
      <Comments comments={comments} post={post} />
    </>
  );
};

export default PostCard;
