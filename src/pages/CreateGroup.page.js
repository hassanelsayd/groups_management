import { useState } from "react";
import { v1 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import "../styles/CreateGroup.css";
const CreateGroupPage = () => {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState();
  const [groupDesc, setGroupDesc] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect New Group Data
    const id = uuid();
    const created_at = new Date().toLocaleString();
    const posts = [];

    const groupData = {
      id,
      created_at,
      group_name: groupName,
      group_desc: groupDesc,
      groupDesc,
      posts,
    };

    // Store in localstorage
    const storedGroups = window.localStorage.getItem("groups");
    const groups = storedGroups ? JSON.parse(storedGroups) : [];
    groups.push(groupData);
    localStorage.setItem("groups", JSON.stringify(groups));

    // Normalize FormData
    setGroupName("");
    setGroupDesc("");
    navigate("/");
  };
  return (
    <div className="create-group">
      <div className="container">
        <h2>Lets Create a group 📋</h2>

        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="groupName">Group Name</label>
              <input
                type="text"
                id="groupName"
                name="groupName"
                required
                onChange={(e) => setGroupName(e.target.value)}
                value={groupName}
                min={3}
              />
            </div>
            <div className="form-group">
              <label htmlFor="groupDescription">Group Description</label>
              <textarea
                id="groupDescription"
                name="groupDescription"
                required
                onChange={(e) => setGroupDesc(e.target.value)}
                value={groupDesc}
                minLength={20}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupPage;
