import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  NewPostCont,
  NewPostHeader,
  InputName,
  TitleInputContainer,
  BodyContainer,
  NewPostBtn,
  CreatePostCont,
} from "./NewPost.style";
/**
 *  create form for posting new Post and store that post in page
 * @param {boolean} openPost
 * @returns {component} NewPost component
 */
const NewPost = ({ openPost }) => {
  // keep new post title
  const [title, setTitle] = useState("");
  // keep new post body
  const [body, setBody] = useState("");
  // keep user information
  const [user, setUser] = useState({});

  useEffect(() => {
    // take user data from local storage
    const userInLocalStrg = JSON.parse(localStorage.getItem("user"));
    if (userInLocalStrg) {
      setUser(userInLocalStrg);
    }
  }, []);
  // store new post in page
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://jsonplaceholder.typicode.com/", {
        method: "POST",
        body: JSON.stringify({
          title,
          body,
          userId: user.id,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreatePostCont openPost={openPost}>
      <NewPostCont onSubmit={onSubmit}>
        <NewPostHeader>Create New Post</NewPostHeader>
        <InputName>Title</InputName>
        <TitleInputContainer
          type="text"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <BodyContainer
          type="text"
          name="title"
          required
          onChange={(e) => setBody(e.target.value)}
        />
        <NewPostBtn type="submit">Post</NewPostBtn>
      </NewPostCont>
    </CreatePostCont>
  );
};

NewPost.protoTypes = {
  openPost: PropTypes.bool,
};

NewPost.defaultProps = {
  openPost: false,
};

export default NewPost;
