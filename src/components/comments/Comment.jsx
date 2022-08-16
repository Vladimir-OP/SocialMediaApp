import { CommentBody, CommentName, CommentCont } from "./comment.style";

const Comment = (userComment) => {
  const colors = ["#7FFFD4", "#8FBC8F", "#BA55D3"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const comment = userComment.post;
  const displayName = comment.email.toUpperCase();

  return (
    <CommentCont>
      <CommentName color={color}>
        <p>{displayName[0] + displayName[1]}</p>
      </CommentName>
      <CommentBody>{comment.body}</CommentBody>
    </CommentCont>
  );
};

export default Comment;
