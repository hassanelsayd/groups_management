import React, { useEffect, useState } from "react";
import GroupOfPosts from "../components/GroupOfPosts";

const PostsPage = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("groups");
    if (storedData) {
      setGroups(JSON.parse(storedData));
    }
  }, []);

  if (groups.length <= 0) {
    return (
      <div className="container">
        <p>There is No Groups</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        {groups.map((group) => {
          if (group.posts.length > 0) {
            return (
              <GroupOfPosts
                key={group.id}
                g_name={group.group_name}
                posts={group.posts}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default PostsPage;
