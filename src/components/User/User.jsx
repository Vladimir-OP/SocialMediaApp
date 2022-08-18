import { useEffect, useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../shared/api";
import Posts from "../Posts/Posts";

import { UserName } from "../Posts/Posts.style";
import { Container } from "./User.style";
import Logout from "../LogOut/Logout";
import Albums from "../albums/Albums";

/**
 *  get information about user
 * @returns {component} User component
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
        const data = await api("GET", "users", userId, "id");
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
      <Logout />
      <Container>
        <UserName> Welcome {user.name}</UserName>
        <Albums />
        <Posts />
      </Container>
    </>
  );
};

export default User;
