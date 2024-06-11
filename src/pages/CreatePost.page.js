import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v1 as uuid } from "uuid";

import "../styles/CreatePost.css";
const CreatePostPage = () => {
  const { group_id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [group, setGroup] = useState();

  useEffect(() => {
    const group_items = JSON.parse(window.localStorage.getItem("groups"));
    const filterd_group = group_items.filter(
      (group) => group.id === group_id
    )[0];
    setGroup(filterd_group);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    const created_at = new Date().toLocaleString();
    const formData = {
      id,
      created_at,
      title,
      description,
      content,
    };

    // /////////////////////////
    const posts = [...group.posts, formData];
    const newGroup = { ...group, posts };

    // Store in localstorage
    const storedGroups = window.localStorage.getItem("groups");
    const groups = storedGroups
      ? JSON.parse(storedGroups).filter((group) => group.id !== group_id)
      : [];
    groups.push(newGroup);
    localStorage.setItem("groups", JSON.stringify(groups));

    // Navigate To Home
    navigate("/");

    // Clear the form fields
    setTitle("");
    setDescription("");
    setContent("");
  };

  return (
    <div className="container">
      <h2>Lets Create a post</h2>
      <div className="create-post-form-container">
        <form className="create-post-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              min={10}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              min={20}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              minLength={100}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
