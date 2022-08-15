import { useEffect, useState, useMemo } from "react";
import { api } from "../../shared/api";
import Logout from "../LogOut/Logout";
import NewPost from "./NewPost";
import Post from "./Post";
import { PostContainer } from "./Post.style";
import { UserName, PostBtn } from "./Posts.style";

const Posts = () => {
  const [msg, setMsg] = useState("posts are loading");
  const [posts, setPosts] = useState([]);
  const [postStatus, setpostStatus] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const userInLocalStrg = await JSON.parse(localStorage.getItem("user"));
      if (userInLocalStrg) {
        setUser(userInLocalStrg);
      }

      await fetchPosts;

      if (!postStatus) {
        setMsg("no posts to show");
      }
    })();
  }, []);

  const fetchPosts = useMemo(async () => {
    try {
      const result = await api("GET", "posts", user.id, "userId");
      const data = result.data;

      if (data) {
        setpostStatus((prev) => !prev);
      }
      setPosts(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, [user]);
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
