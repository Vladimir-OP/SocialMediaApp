import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { api } from "../../shared/api";
import {
  LoginForm,
  LoginHeader,
  LoginInputName,
  InputContainer,
  LoginBtn,
  WrongEmail,
} from "./Login.style";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [showWrongEmail, setShowWrongEmail] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let user = await api("GET", "users", email, "email");

      user = user.data;
      setUser(user[0]);

      if (user[0]) {
        navigate("/user");
      } else {
        setShowWrongEmail((prev) => !prev);
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
        placeholder="john.albert@example.com"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <WrongEmail showWrongEmail={showWrongEmail}>
        wrong email please try again
      </WrongEmail>
      <LoginBtn type="submit">Login</LoginBtn>
    </LoginForm>
  );
};

export default Login;
