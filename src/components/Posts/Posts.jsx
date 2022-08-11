import { useEffect, useState, useMemo } from "react";
import Post from "./Post";
import { PostContainer } from "./Post.style";
import { UserName } from "./Posts.style";
import Logout from "../LogOut/Logout";
import { PostBtn } from "./Posts.style";
import NewPost from "./NewPost";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postStatus, setpostStatus] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const userL = await JSON.parse(await localStorage.getItem("user"));
      if (userL) {
        setUser(userL);
      }
      const userPosts = await fetchPosts;
    })();
  }, []);

  const fetchPosts = useMemo(async () => {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      );
      const data = await result.json();
      if (data) {
        setpostStatus((prev) => !prev);
      }
      setPosts(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  let msg = "posts are loading";
  if (postStatus) {
    msg = "no posts to show";
    console.log(33333333, posts);
  }
  return (
    <>
      <UserName> Welcome {user.name}</UserName>

      <PostContainer>
        <Logout />
        {posts.length > 0 ? posts.map((post) => <Post post={post} />) : msg}
      </PostContainer>
      <PostBtn
        onClick={() => {
          setOpenPost((prev) => !prev);
        }}
      >
        +
      </PostBtn>
      <NewPost openPost={openPost} />
    </>
  );
};

export default Posts;
