import React from "react";
import CardContent from "./card-content";
import Comments from "./comments";

const PostCard = ({ post, users, comments, onOpenUserPage, onLoadComments }) => {
  return (
    <>
      <CardContent post={post} users={users} onOpenUserPage={onOpenUserPage} />
      <Comments comments={comments} post={post} />
    </>
  );
};

export default PostCard;
