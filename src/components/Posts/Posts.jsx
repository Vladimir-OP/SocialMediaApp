import { useEffect, useState } from "react";
import Post from "./Post";
import { PostContainer } from "./Post.style";
import { UserName } from "./Posts.style";
import Logout from "../LogOut/Logout";
import { PostBtn } from "./Posts.style";
import NewPost from "./NewPost";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [postStatus, setpostStatus] = useState();
  const [openPost, setOpenPost] = useState(false);
  const user = props.user;

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
    <>
      <UserName> Welcome {user.name}</UserName>

      <PostContainer>
        <Logout />

        {"  "}
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
