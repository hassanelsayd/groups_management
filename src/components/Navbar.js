import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">Groups Manage</div>
        <ul className={`navbar-links ${isActive ? "active" : ""}`}>
          <li>
            <Link to="/">Browse Groups</Link>
          </li>
          <li>
            <Link to="/create-group">Create Group</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
