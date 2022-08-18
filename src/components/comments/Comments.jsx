import { useEffect, useState, useContext, useMemo } from "react";
import { UserContext } from "../UserContext";
import PropTypes from "prop-types";
import { api } from "../../shared/api";
import { CommentsCont } from "./comments.style";
import Comment from "./Comment";

/**
 * create comments list
 * @param {number} postID
 * @param {boolean} show
 * @returns {component} Comments component
 */
const Comments = ({ postID, show }) => {
  // take comments count data from userContext
  const { setCommentsCount } = useContext(UserContext);
  // keep message about comments loading status
  const [msg, setMsg] = useState("no comments to show");
  // keep comments data
  const [comments, setComments] = useState([]);
  // set comments loading status
  const [commentStatus, setcommentStatus] = useState(true);

  useEffect(() => {
    if (commentStatus) {
      setMsg("comments are loading");
    }

    (async () => {
      await fetchComments;
    })();
  }, []);
  // get comments from DB
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
  // set comments count
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

Comments.propTypes = {
  postID: PropTypes.number,
  show: PropTypes.bool,
};

Comments.defaultProps = {
  show: false,
};

export default Comments;
