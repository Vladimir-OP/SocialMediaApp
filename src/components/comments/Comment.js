import { CommentBody, CommentName } from "./comment.style";

const Comment = (userComment) => {
  const comment = userComment.post;
  return (
    <CommentBody>
      <CommentName>
        <span>User </span>
        {comment.email}
      </CommentName>
      {comment.body}
    </CommentBody>
  );
};

export default Comment;
