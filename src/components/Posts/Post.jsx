import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import {
  PostContainer,
  PostTitle,
  PostBody,
  CommentBtn,
  CommentCount,
} from "./Post.style";
import { useState, useContext } from "react";
import Comments from "../comments/Comments";
import { UserContext } from "../UserContext";
const Post = ({ post }) => {
  const { commentsL } = useContext(UserContext);
  const [openComments, setOpenComments] = useState(false);

  return (
    <PostContainer>
      <CommentBtn
        onClick={() => {
          setOpenComments((prev) => !prev);
        }}
      >
        <FontAwesomeIcon icon={faComment} />
        <CommentCount>{commentsL}</CommentCount>
      </CommentBtn>

      <PostTitle>{post.title}</PostTitle>
      <PostBody>{post.body}</PostBody>
      {openComments && <Comments postID={post.id} />}
    </PostContainer>
  );
};

export default Post;
