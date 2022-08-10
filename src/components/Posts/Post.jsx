import React from "react";
import { PostContainer, PostTitle, PostBody, CommentBtn } from "./Post.style";
import { useState } from "react";
import Comments from "../comments/Comments";
const Post = ({ post }) => {
  const [openComments, setOpenComments] = useState(false);

  return (
    <PostContainer>
      Title
      <PostTitle>{post.title}</PostTitle>
      <PostBody>{post.body}</PostBody>
      <CommentBtn
        onClick={() => {
          setOpenComments((prev) => !prev);
        }}
      >
        {openComments ? "hide comments" : "show comments"}
      </CommentBtn>
      {openComments && <Comments postID={post.id} />}
    </PostContainer>
  );
};

export default Post;
