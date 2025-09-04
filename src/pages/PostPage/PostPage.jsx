import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../../store/slices/postsSlice";
import "./PostPage.css";
import PostForm from "../../components/PostForm/PostForm";

function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find((p) => p.id === Number(id));
    if (foundPost) {
      setPost(foundPost);
      console.log("Текущий список постов:", posts);
    } else {
      const fetchPost = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await res.json();
        setPost(data);
        dispatch(setPosts([...posts, data]));
      };
      fetchPost();
    }
  }, [id, posts, dispatch]);

  if (!post) return <div className="post-page__loading">Загрузка...</div>;

  return (
    <div className="post-page">
      <div className="post-page__card">
        <h1 className="post-page__title">{post.title}</h1>
        <p className="post-page__body">{post.body}</p>
      </div>

      <PostForm posts={posts} />
    </div>
  );
}

export default PostPage;
