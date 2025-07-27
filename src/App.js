import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PostDetails from "./pages/PostDetails";
import AddPost from "./pages/AddPost";
import postsData from "./data/posts";

function App() {
  const [posts, setPosts] = useState(postsData);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/add">Add Post</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home posts={posts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<PostDetails posts={posts} />} />
        <Route path="/add" element={<AddPost onAddPost={handleAddPost} />} />
      </Routes>
    </div>
  );
}

export default App;



