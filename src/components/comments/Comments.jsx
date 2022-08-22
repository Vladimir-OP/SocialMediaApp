import { useEffect, useState, useContext, useMemo } from "react";
import { UserContext } from "../UserContext";
import PropTypes from "prop-types";
import { api } from "../../shared/api";
import axios from "axios";
import Comment from "./Comment";
import { CommentsCont } from "./comments.style";

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
    // set response header Content-Type
    axios.interceptors.request.use((value) => {
      value.headers = {
        "Content-Type": "application/json",
      };
      return value;
    });
  }, [postID]);
  return (
    <>
      {show && (
        <CommentsCont>
          {comments.length > 0
            ? comments.map((post) => <Comment key={post.id} post={post} />)
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
