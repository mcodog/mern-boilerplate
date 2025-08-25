import React from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsLoggedIn } from "../../redux/user/slice";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const res = await axiosInstance.get("/auth/logout");
      dispatch(logout());
      alert("logout success");
    } catch (e) {
      alert("Failed to logout");
    }
  };

  const handleRefresh = async () => {
    try {
      const res = await axiosInstance.get("/auth/refresh");
      console.log(res);
      alert("good");
    } catch (e) {
      alert("failed");
    }
  };
  return (
    <div className="flex gap-2 py-2">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      {isLoggedIn ? (
        <>
          <Link to="/profile">Profile</Link>
          <Link onClick={handleLogout}>Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Header;
