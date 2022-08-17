import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../UserContext";
import Comments from "../comments/Comments";
import {
  PostContainer,
  PostHeader,
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
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
        <CommentBtn
          onClick={() => {
            setOpenComments((prev) => !prev);
          }}
        >
          <CommentCount>
            <FontAwesomeIcon icon={faComment} />
            {commentsCount}
          </CommentCount>
        </CommentBtn>
      </PostHeader>
      <PostBody>{post.body}</PostBody>
      <Comments postID={post.id} show={openComments} />
    </PostContainer>
  );
};

export default Post;
