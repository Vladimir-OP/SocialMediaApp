import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext, useState } from "react";
import Logout from "../LogOut/Logout";
import {
  NewPostCont,
  NewPostHeader,
  InputName,
  TitleInputContainer,
  BodyContainer,
  NewPostBtn,
  MyPostsBtn,
} from "./NewPost.style";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    console.log(11);
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
    <NewPostCont onSubmit={onSubmit}>
      <MyPostsBtn
        onClick={() => {
          navigate("/user");
        }}
      >
        My posts
      </MyPostsBtn>
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
