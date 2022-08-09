import { useEffect, useState } from "react";
import Post from "./Post";
import { PostContainer } from "./Post.style";

const Posts = (props) => {
  const [Posts, usePosts] = useState([]);
  const userId = props.user;
  console.log(userId);

  useEffect(() => {
    (async () => {
      const userPosts = await fetchPosts();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      usePosts(userPosts);
    })();
  }, []);

  const fetchPosts = async () => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const data = await result.json();
    return data;
  };
  return (
    <PostContainer>
      {Posts.length > 0
        ? Posts.map((post) => <Post post={post} />)
        : "no posts to show"}
    </PostContainer>
  );
};

export default Posts;
