import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { api } from "../../shared/api";
import Posts from "../Posts/Posts";
import Albums from "../Albums/Albums";
import { UserName } from "../Posts/Posts.style";
import { Container } from "./User.style";

/**
 *  Get information about user
 *  @returns {component} User component
 */
const User = () => {
  // keep user information
  const { user } = useContext(UserContext);
  // keep user id
  const { id: userId } = user;

  useEffect(() => {
    (async () => {
      try {
        // fetch data from database
        const data = await api("GET", "users", { id: userId });
        return data;
      } catch (error) {
        console.log(error);
      }
    })();
    // store user information in local storage
    localStorage.setItem("user", JSON.stringify(user));
  }, []);

  return (
    <>
      <Container data-testid = "user-1">
        <UserName> Welcome {user.name}</UserName>
        <Albums />
        <Posts />
      </Container>
    </>
  );
};

export default User;
