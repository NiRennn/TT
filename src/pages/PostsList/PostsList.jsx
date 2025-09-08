import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPosts } from "../../store/slices/postsSlice";
import Slider from "../../components/Slider/Slider";
import "./PostsList.css";

function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);

  useEffect(() => {
    const fetchPosts = async () => {
      if (posts.length === 0) {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      dispatch(setPosts(data.slice(0, 20)));
      }
    };
    fetchPosts();
  }, [dispatch, posts.length]);
 
  return (
    <div className="posts">

      {posts.length > 0 && (
        <Slider
          items={posts}
          renderItem={(post, index) => (
            <div className="post">
              <h2 className="post__title">
                {index + 1}. {post.title}
              </h2>
              <Link to={`/posts/${post.id}`} className="post__button">
                Перейти
              </Link>
            </div>
          )}
        />
      )}
    </div>
  ); 
}

export default PostsList;
