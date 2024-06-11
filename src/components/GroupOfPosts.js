import { useState } from "react";
import "../styles/GroupOfPosts.css";
import { Link } from "react-router-dom";
const GroupOfPosts = ({ g_name, posts }) => {
  return (
    <div className="group-of-posts">
      <h2>{g_name}</h2>
      <div className="posts-list-container">
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          <ul className="posts-list">
            {posts.map((post) => (
              <Link key={post.id} to={`/post/${post.id}`}>
                <li className="post-item">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.description}</p>
                  <p className="post-info">Created at:{post.created_at}</p>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GroupOfPosts;
