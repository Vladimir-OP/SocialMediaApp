import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../UserContext";
import Comments from "../comments/Comments";
import {
  PostContainer,
  PostTitle,
  PostBody,
  CommentBtn,
  CommentCount,
} from "./Post.style";

const Post = ({ post }) => {
  const { commentsCount } = useContext(UserContext);
  const [openComments, setOpenComments] = useState(false);

  return (
    <PostContainer>
      <CommentBtn
        onClick={() => {
          setOpenComments((prev) => !prev);
        }}
      >
        <FontAwesomeIcon icon={faComment} />
        <CommentCount>{commentsCount}</CommentCount>
      </CommentBtn>
      <PostTitle>{post.title}</PostTitle>
      <PostBody>{post.body}</PostBody>
      <Comments postID={post.id} show={openComments} />
    </PostContainer>
  );
};

export default Post;
