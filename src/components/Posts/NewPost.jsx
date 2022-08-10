import { UserContext } from "../UserContext";
import { useContext, useState } from "react";

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
  const { user } = useContext(UserContext);
  const openPost = props.openPost;

  const onSubmit = async (e) => {
    e.preventDefault();
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
      ></TitleInputContainer>
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
