import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { api } from "../../shared/api";
import {
  LoginForm,
  LoginHeader,
  LoginInputName,
  InputContainer,
  LoginBtn,
  WrongEmail,
} from "./Login.style";
/**
 *  Login user and take user data from data base
 *  @returns {component} Login component
 */
const Login = () => {
  const navigate = useNavigate();
  // keep user information
  const { setUser } = useContext(UserContext);
  // keep user email
  const [email, setEmail] = useState("");
  // keep boolean value about wrong email
  const [showWrongEmail, setShowWrongEmail] = useState(false);

  // get user from db
  const onSubmit = async (e) => {
    console.log("user loged in");
    e.preventDefault();
    try {
      const { data: user } = await api("GET", "users", { email });

      setUser(user[0]);

      // navigate user to the main page
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
    <LoginForm  onSubmit={onSubmit}>
      <LoginHeader>Login</LoginHeader>
      <LoginInputName>Email</LoginInputName>
      <InputContainer
        type="email"
        name="email"
        placeholder="john.albert@example.com"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <WrongEmail
        showWrongEmail={
          // warn about wrong email
          showWrongEmail
        }
      >
        wrong email please try again
      </WrongEmail>
      <LoginBtn data-testid="Login"  type="submit">
        Login
      </LoginBtn>
    </LoginForm>
  );
};

export default Login;
