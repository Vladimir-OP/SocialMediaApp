import { useEffect, useContext } from "react";
import NewPost from "../Posts/NewPost";
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

  const fetchUser = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    return data;
  };
  return (
    <>
      <Posts user={user} />
    </>
  );
};

export default User;
