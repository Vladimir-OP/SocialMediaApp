import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Post from "./Post";
import { PostContainer } from "./Post.style";
import { UserName } from "./Posts.style";
import Logout from "../LogOut/Logout";
import NewPost from "./NewPost";
import { PostBtn } from "./NewPost.style";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [postStatus, setpostStatus] = useState();
  const user = props.user;
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const userPosts = await fetchPosts();
      setPosts(userPosts);
    })();
  }, []);

  const fetchPosts = async () => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    setpostStatus(true);
    const data = await result.json();
    if (data) {
      setpostStatus(false);
    }
    return data;
  };
  let msg = "posts are loading";
  if (postStatus) {
    msg = "no posts to show";
  }
  return (
    <PostContainer>
      <UserName> Welcome {user.name}</UserName>
      <Logout />
      <PostBtn
        onClick={() => {
          navigate("/post");
        }}
      >
        Make Post
      </PostBtn>
      {"  "}
      {posts.length > 0 ? posts.map((post) => <Post post={post} />) : msg}
    </PostContainer>
  );
};

export default Posts;
