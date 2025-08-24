import React from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const Header = () => {
  const handleLogout = async () => {
    try {
      const res = await axiosInstance.get("/auth/logout");
      alert("logout success");
    } catch (e) {
      alert("Failed to logout");
    }
  };
  return (
    <div className="flex gap-2 py-2">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link onClick={handleLogout}>Logout</Link>
    </div>
  );
};

export default Header;
