import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPost({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Math.floor(Math.random() * 1000), // Fake ID
      title,
      content
    };

    onAddPost(newPost); // Send to parent
    navigate("/home"); // Redirect to home
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <br />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
