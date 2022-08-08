import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import {
  LoginForm,
  LoginHeader,
  LoginInputName,
  InputContainer,
  LoginBtn,
} from "./Login.style";



const Login = (props) => {
  const {setUser} = props;
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const User = await users.find(e => e.email == email);
     setUser(User)
    if (User) {
      navigate("/user");
    }
  };
  return (
    <LoginForm onSubmit={onSubmit}>
      <LoginHeader>Login</LoginHeader>
      <LoginInputName>Email</LoginInputName>
      <InputContainer
        type="email"
        name="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginBtn type="submit">Login</LoginBtn>
    </LoginForm>
  );
};

export default Login;
