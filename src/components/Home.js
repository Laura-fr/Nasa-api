import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="/apod">
        <button className="btn from-top">See into the stars</button>
      </Link>
    </div>
  );
};

export default Home;
