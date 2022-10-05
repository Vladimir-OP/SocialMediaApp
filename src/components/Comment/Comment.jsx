import { CommentBody, CommentName, CommentCont } from "./comment.style";
import PropTypes from "prop-types";
/**
 *  create a comment and gives style to it
 *  @param {object} comment
 *  @returns {component} Comment component
 */
const Comment = ({ post: comment }) => {
  // keep comment color styles
  const colors = ["#7FFFD4", "#8FBC8F", "#BA55D3"];
  // determine which color should be
  const color = colors[Math.floor(Math.random() * colors.length)];
  // make comment writer's name uppercase
  const displayName = (comment.email[0] + comment.email[1]).toUpperCase();

  return (
    <CommentCont data-testid="Comment">
      <CommentName data-testid="CommentName" iconColor={color}>
        <p>{displayName}</p>
      </CommentName>
      <CommentBody>{comment.body}</CommentBody>
    </CommentCont>
  );
};

Comment.propTypes = {
  post: PropTypes.shape({
    email: PropTypes.string,
    body: PropTypes.string,
  }),
};

Comment.defaultProps = {
  post: {},
};

export default Comment;
