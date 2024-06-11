import { useState, useEffect } from "react";
import { v1 as uuidv } from "uuid";
import "../styles/CreateGroup.css";
import { useParams, useNavigate } from "react-router-dom";
const EditGroupPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState();
  const [groupDesc, setGroupDesc] = useState();
  const [group, setGroup] = useState();

  useEffect(() => {
    const group_items = JSON.parse(window.localStorage.getItem("groups"));
    const filterd_group = group_items.filter((group) => group.id === id)[0];
    setGroupName(filterd_group.group_name);
    setGroupDesc(filterd_group.group_desc);
    setGroup(filterd_group);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroup = { ...group, group_name: groupName, group_desc: groupDesc };

    // Store in localstorage
    const storedGroups = window.localStorage.getItem("groups");
    const groups = storedGroups
      ? JSON.parse(storedGroups).filter((group) => group.id !== id)
      : [];
    groups.push(newGroup);
    localStorage.setItem("groups", JSON.stringify(groups));

    // Navigate To Home
    navigate("/");
  };

  return (
    <div className="create-group">
      <div className="container">
        <h2>Edit {groupName}</h2>

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

export default EditGroupPage;
