import React from 'react';
import posts from "../data/posts";
import { Link } from 'react-router-dom';

function Home(){
  return(
    <div>
        <h2>Blog Posts</h2>
        {posts.map((post)=>(
            <div key={post.id}style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0,50)}...</p>
           <Link to={`/post/${post.id}`}>Read more</Link>
            </div>
        ))}
    </div>
  );  

}  
export default Home;