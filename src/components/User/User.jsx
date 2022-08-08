import { UserPosts } from "./User.style";
import { useEffect, useState } from "react";

const User = async (props) => {
  const { user } = props;
  console.log(user.id);
  const {data} = (await fetch("https://jsonplaceholder.typicode.com/posts/1"),{
    method:"GET"
  });
  console.log(data.json());
  

  useEffect(() => {
    (async () => {
      const userPosts = await fetchPosts();
      console.log(userPosts);
    })();
  }, []);

  const fetchPosts = async () => {
  
    const {data} = (await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    ).json();
    console.log(data);
    
  };
  return (<UserPosts></UserPosts>);
};

export default User;
