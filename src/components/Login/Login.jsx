import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

import {
  LoginForm,
  LoginHeader,
  LoginInputName,
  InputContainer,
  LoginBtn,
} from "./Login.style";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await (
        await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
      ).json();
      setUser(user[0]);
      if (user[0]) {
        navigate("/user");
      }
    } catch (error) {
      console.log(error);
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
