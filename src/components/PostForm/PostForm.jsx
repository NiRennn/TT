import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../../store/slices/postsSlice";
import "./PostForm.css";

function PostForm({ posts }) {
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({
    userId: 1,
    id: posts.length + 1,
    title: "",
    body: "",
  });

  const handleAddPost = (e) => {
    e.preventDefault();
    const updatedPosts = [...posts, newPost];
    dispatch(setPosts(updatedPosts));
    console.log("Список постов после добавления:", updatedPosts);

    setNewPost({ userId: 1, id: updatedPosts.length + 1, title: "", body: "" });
  };

  return (
    <div className="add-post-form">
      <form onSubmit={handleAddPost}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Body:</label>
          <textarea
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            required
          />
        </div>
        <button type="submit">Добавить пост</button>
      </form>
    </div>
  );
}

export default PostForm;
