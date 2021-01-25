import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <button className="btn">Take me back home</button>
      </Link>
    </div>
  );
};

export default NavBar;
