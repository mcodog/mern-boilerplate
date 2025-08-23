import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-2 py-2">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Header;
