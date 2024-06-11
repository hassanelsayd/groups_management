import React, { useEffect, useState } from "react";
import "../styles/GroupsList.css";
import { Link } from "react-router-dom";

const GroupsListPage = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("groups");
    if (storedData) {
      setGroups(JSON.parse(storedData));
    }
  }, []);

  //   Deleting a group
  const handleDelete = (id) => {
    const groupsItems = groups.filter((group) => group.id !== id);
    window.localStorage.setItem("groups", JSON.stringify(groupsItems));
    setGroups(groupsItems);
  };
  return (
    <div className="container">
      <div className="groups-list-container">
        {groups.length === 0 ? (
          <div className="container">
            <p>No groups available</p>
            <button className="create-group-btn">
              <Link to="create-group">Create New Group</Link>
            </button>
          </div>
        ) : (
          <ul className="groups-list">
            <h1>There is a list of your groups</h1>
            {groups.map((group) => (
              <li key={group.id} className="group-item">
                <h3 className="group-name">{group.group_name}</h3>
                <p className="group-description">{group.group_desc}</p>
                <p className="group-info">
                  <span>Created at: {group.created_at}</span>
                  <span>Number of posts: {group.posts.length}</span>
                </p>
                <div className="group-actions">
                  <button className="edit-button">
                    <Link to={`/edit-group/${group.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(group.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                  <button className="add-post">
                    <Link to={`/create-post/${group.id}`}>Create Post</Link>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GroupsListPage;
