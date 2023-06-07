import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts.store";
import Table from "../common/table/table";
import { getUsers } from "../../store/users.store";
import { nanoid } from "nanoid";
import { getComments, loadCommentsList } from "../../store/comments.store";

const Posts = () => {
  const [sortBy, setSortBy] = useState({ path: "", order: "" });
  const [pageSizePagination, setPageSizePagination] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const posts = useSelector(getPosts());
  const users = useSelector(getUsers());
  const comments = useSelector(getComments());
  const dispatch = useDispatch();
  const commentsQuantity = comments?.length

  const makeUpperCaseFirstSymbol = (str) => {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1);
  };

  const makeLowerCaseFirstSymbol = (str) => {
    return str?.charAt(0)?.toLowerCase() + str?.slice(1);
  };

  const generatePhotoNumber = () => {
    return Math.round(Math.random() * (99 - 1) + 1);
  };

  const getUserName = (id) => {
    return users?.find((user) => user.id === id)?.name;
  };

  const handleLoadComments = (postId) => {
    dispatch(loadCommentsList(postId));
  };

  return (
    <div className="container p-3">
      {posts?.map((post) => {
        const generate = () => {
          let length = 3;
          let result = " ";
          const characters = "abcdefghijklmnopqrstuvwxyz";
          const charactersLength = characters.length;
          for (let i = 0; i < length; i++) {
            result += characters.charAt(
              Math.floor(Math.random() * charactersLength)
            );
          }
          return result;
        };

        let randomId = (generate() + Math.round(Math.random() * (100 - 1) + 1))
          .replace(" ", "")
          .trim();

        return (
          <div className="card p-3 mb-3 myCard" key={post.id}>
            <div className="d-flex ">
              <div>
                <img
                  className="card-img"
                  src={`https://randomuser.me/api/portraits/women/${generatePhotoNumber()}.jpg`}
                  alt="Аватарка"
                />
              </div>
              <div className="w-100 ps-3">
                <h2 className="card-title">
                  {makeUpperCaseFirstSymbol(post.title)}
                </h2>
                <h5 className="card-subtitle mb-2">
                  {getUserName(post.userId)}
                </h5>
                <p className="card-text">
                  {makeUpperCaseFirstSymbol(post.body)}
                </p>
              </div>
            </div>

            <div className="d-flex flex-column align-items-end">
              <p>
                <button
                  className="btn btn-outline-success"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#" + randomId}
                  aria-expanded="false"
                  aria-controls={randomId}
                  onClick={() => handleLoadComments(post.id)}
                >
                  {`Комментарии (${commentsQuantity})`}
                </button>
              </p>

              <div className="collapse" id={randomId}>
                <div className="card card-body">
                  {comments.map((comment, index) => {
                    return (
                      <>
                        <div
                          className="d-flex  p-3 gap-2 myCard"
                          key={comment.id}
                        >
                          <div style={{ width: "50px" }}>
                            <img
                              className="card-img pt-1"
                              style={{ minWidth: "50px" }}
                              src={`https://randomuser.me/api/portraits/men/${generatePhotoNumber()}.jpg`}
                              alt="Аватарка"
                            />
                          </div>
                          <div>
                            <h5 className="mb-1">
                              {makeUpperCaseFirstSymbol(comment.name)}
                            </h5>
                            <h6>{makeLowerCaseFirstSymbol(comment.email)}</h6>
                            <p>{comment.body}</p>
                          </div>
                        </div>
                        {index !== comments.length - 1 && <hr />}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* <Table /> */}
    </div>
  );
};

export default Posts;
