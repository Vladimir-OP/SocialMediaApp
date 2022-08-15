import { UserContext } from "../UserContext";
import { useState, useEffect } from "react";

import {
  NewPostCont,
  NewPostHeader,
  InputName,
  TitleInputContainer,
  BodyContainer,
  NewPostBtn,
} from "./NewPost.style";

const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState({});
  const openPost = props.openPost;

  useEffect(() => {
    const userL = JSON.parse(localStorage.getItem("user"));
    if (userL) {
      setUser(userL);
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
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
  catch (error){
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
      ></BodyContainer>
      <NewPostBtn type="submit">Post</NewPostBtn>
    </NewPostCont>
  );
};

export default NewPost;
