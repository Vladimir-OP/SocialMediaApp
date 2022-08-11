import { useEffect, useContext } from "react";
import Posts from "../Posts/Posts";
import { UserContext } from "../UserContext";

const User = () => {
  const { user } = useContext(UserContext);
  const userId = user.id;

  useEffect(() => {
    (async () => {
      const userdata = await fetchUser();
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, []);

  const fetchUser = async () => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Posts />
    </>
  );
};

export default User;
