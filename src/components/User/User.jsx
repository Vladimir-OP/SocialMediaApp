import { useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import { api } from "../../shared/api";
import Posts from "../Posts/Posts";

const User = () => {
  const { user } = useContext(UserContext);
  const { id: userId } = user;

  useEffect(() => {
    (async () => {
      try {
        const data = await api("GET", "users", userId, "id");
        return data;
      } catch (error) {
        console.log(error);
      }
    })();

    localStorage.setItem("user", JSON.stringify(user));
  }, []);

  return <Posts />;
};

export default User;
