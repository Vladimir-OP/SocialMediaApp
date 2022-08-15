import { useState, useEffect } from "react";
import {
  NewPostCont,
  NewPostHeader,
  InputName,
  TitleInputContainer,
  BodyContainer,
  NewPostBtn,
} from "./NewPost.style";

const NewPost = ({ openPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const userInLocalStrg = JSON.parse(localStorage.getItem("user"));
    if (userInLocalStrg) {
      setUser(userInLocalStrg);
    }
  }, []);

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
    <NewPostCont openPost={openPost} onSubmit={onSubmit}>
      <NewPostHeader>Create New Post</NewPostHeader>
      <InputName>Post Title</InputName>
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
  );
};

export default NewPost;
