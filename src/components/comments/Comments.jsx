import { useEffect, useState, useContext, useMemo } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../shared/api";
import { CommentsCont } from "./comments.style";
import Comment from "./Comment";

const Comments = ({ postID, show }) => {
  const { setCommentsCount } = useContext(UserContext);
  const [msg, setMsg] = useState("no comments to show");
  const [comments, setComments] = useState([]);
  const [commentStatus, setcommentStatus] = useState(true);

  useEffect(() => {
    if (commentStatus) {
      setMsg("comments are loading");
    }

    (async () => {
      await fetchComments;
    })();
  }, []);

  const fetchComments = useMemo(async () => {
    try {
      const result = await api("GET", "comments", postID, "postId");
      const data = result.data;

      if (data) {
        setcommentStatus(false);
      }

      setComments(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, [postID]);

  setCommentsCount(comments.length);

  return (
    <>
      {show && (
        
        <CommentsCont>
          {comments.length > 0
            ? comments.map((post) => <Comment post={post} />)
            : msg}
        </CommentsCont>
      )}
    </>
  );
};

export default Comments;
