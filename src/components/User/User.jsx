import { UserPosts } from "./User.style";
import { useEffect, useState } from "react";
import Posts from "../Posts/Posts";

const User = (props) => {
  const { user } = props;
  const userId = user.id;
  useEffect(() => {
    (async () => {
      const userdata = await fetchUser();
    })();
  }, []);

  const fetchUser = async () => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = result.json();
    return data;
  };
  return <Posts user={userId} />;
};

export default User;
