import { useEffect, useState, useMemo, useContext } from "react";
import axios from "axios";
import { api } from "../../shared/api";
import { UserContext } from "../UserContext";
import NewPost from "./NewPost";
import Post from "./Post";
import { PostContainer } from "./Post.style";
import { PostBtn, PostsContainer } from "./Posts.style";

/**
 *  Creates Posts list
 *  @returns {component} Posts component
 */

const Posts = () => {
  // keep message text and change it depend on post status
  const [msg, setMsg] = useState("posts are loading");
  // keep posts information
  const [posts, setPosts] = useState([]);
  // keep postStatus during page loading
  const [postStatus, setpostStatus] = useState(false);
  // open and close New post field
  const [openNewPost, setOpenNewPost] = useState(false);
  // keep user information from local storage
  const [user, setUser] = useState({});
  const { openAlbum } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      // take user data from local storage
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
  // get data about posts from data base
  const fetchPosts = useMemo(async () => {
    try {
      const result = await api("GET", "posts", { userId: user.id });
      const data = result.data;

      if (data) {
        setpostStatus((prev) => !prev);
      }
      setPosts(data);
      return data;
    } catch (error) {
      console.log(error);
    }
    axios.interceptors.request.use((value) => {
      value.headers = {
        "Content-Type": "application/json",
      };
      return value;
    });
  }, [user]);
  return (
    <PostsContainer openAlbum={openAlbum}>
      <NewPost openNewPost={openNewPost} />

      <PostBtn
        onClick={() => {
          setOpenNewPost((prev) => !prev);
        }}
      >
        +
      </PostBtn>
      <PostContainer>
        {posts.length > 0
          ? posts.map((post) => <Post key={post.id} post={post} />)
          : msg}
      </PostContainer>
    </PostsContainer>
  );
};

export default Posts;
