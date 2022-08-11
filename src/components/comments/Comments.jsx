import { useEffect, useState, useContext } from "react";
import { CommentsCont } from "./comments.style";
import Comment from "./Comment";
import { UserContext } from "../UserContext";

const Comments = ({ postID }) => {
  const [comments, setComments] = useState([]);
  const [commentStatus, setcommentStatus] = useState(true);
  const { setCommentsL } = useContext(UserContext);
  useEffect(() => {
    (async () => {
      const userComments = await fetchComments();
      setComments(userComments);
    })();
  }, []);

  const fetchComments = async () => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postID}`
    );
    setcommentStatus(true);
    const data = await result.json();
    if (data) {
      setcommentStatus(false);
    }
    return data;
  };
  let msg = "no comments to show";
  if (commentStatus) {
    msg = "comments loading";
  }
  setCommentsL(comments.length);
  return (
    <CommentsCont>
      {comments.length > 0
        ? comments.map((post) => <Comment post={post} />)
        : msg}
    </CommentsCont>
  );
};

export default Comments;
