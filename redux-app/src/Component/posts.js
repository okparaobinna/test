import React from "react";
import { useSelector } from "react-redux";
import {selectAllposts} from "../Feature/Posts/postSlice";
import './posts.css'


const PostsList = () => {
  const posts = useSelector(selectAllposts);
  
  const renderPost = posts.map(post => 
    
    <article key={post.id} className='header'>
      <h3 className="title">{post.title}</h3>
      <p className="content">{post.content}</p>
    </article>

  
 
  );
 

  return (
    <div>
      <h1 style={{color:'#ffff', textAlign:'center'}}>Posts</h1>

      <div style={{display:'flex',flexWrap: 'wrap', justifyContent: 'center'}}>{renderPost}</div>

    </div>
  );
};

export default PostsList;
