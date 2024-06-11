import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Post.css";
const PostPage = () => {
  const { post_id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const groups = JSON.parse(window.localStorage.getItem("groups"));

    const current_post = groups
      .filter((group) => group.posts.length > 0)
      .map((group) => group.posts.filter((post) => post.id === post_id))
      .filter((group) => group.length > 0)[0][0];
    setPost(current_post);
  }, []);
  if (!post) {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="post-page-container">
        <div className="post-item">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-description">{post.description}</p>
          <p className="post-info">Created at: {post.created_at}</p>
          <div className="post-content">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
