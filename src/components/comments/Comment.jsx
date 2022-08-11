import { CommentBody, CommentName } from "./comment.style";

const Comment = (userComment) => {
  const comment = userComment.post;
  return (
    <CommentBody>
      <CommentName>{comment.email}</CommentName>
      {comment.body}
    </CommentBody>
  );
};

export default Comment;
