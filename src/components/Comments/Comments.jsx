import { useEffect, useState, useContext, useMemo } from "react";
import { UserContext } from "../contexts/UserContext";
import PropTypes from "prop-types";
import { api } from "../../shared/api";
import Comment from "../Comment/Comment";
import { CommentsCont, Commentsglobal } from "./comments.style";

/**
 *  Creates comments list
 *  @param {number} postID
 *  @param {boolean} show
 *  @returns {component} Comments component
 */
const Comments = ({ postID, show }) => {
  // keep message about comments loading status
  const [msg, setMsg] = useState("no comments to show");
  // keep comments data
  const { comments, setComments } = useContext(UserContext);
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
      const { data } = await api("GET", "comments", { postId: postID });
      setComments(data);

      if (data) {
        setcommentStatus(false);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }, [postID]);
  return (
    <Commentsglobal  data-testid="globalCont">
      {show && (
        <CommentsCont data-testid="Comments">
          {comments.length > 0
            ? comments.map((post) => <Comment key={post.id} post={post} />)
            : msg}
        </CommentsCont>
      )}
    </Commentsglobal>
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
