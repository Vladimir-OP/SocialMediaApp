import { useEffect, useState, useMemo, useContext } from "react";
import { api } from "../../shared/api";
import { UserContext } from "../contexts/UserContext";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import { PostContainer } from "../Post/Post.style";
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
  }, [user]);
  return (
    <PostsContainer openAlbum={openAlbum}>
      <NewPost openNewPost={openNewPost} />

      <PostBtn
        data-testid="PostBtn"
        onClick={() => {
          setOpenNewPost((prev) => !prev);
        }}
      >
        +
      </PostBtn>
      <PostContainer data-testid="postContainer">
        {posts.length > 0
          ? posts.map((post) => <Post key={post.id} post={post} />)
          : msg}
      </PostContainer>
    </PostsContainer>
  );
};

export default Posts;
