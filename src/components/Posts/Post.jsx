import { useState, useContext } from "react";
import PropTypes from "prop-types";
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

/**
 *  Creates a post and gives style to it
 *  @param {object} post
 *  @returns {component} Post component
 */
const Post = ({ post }) => {
  // keep comments count
  const { comments } = useContext(UserContext);
  // keep boolean value and open comment section
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
            {comments.length}
          </CommentCount>
        </CommentBtn>
      </PostHeader>
      <PostBody>{post.body}</PostBody>
      <Comments postID={post.id} show={openComments} />
    </PostContainer>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};
Post.defaultProps = {
  post: {},
};
export default Post;
