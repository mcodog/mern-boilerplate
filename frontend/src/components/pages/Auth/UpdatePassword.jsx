import React, { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/user/slice";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);

  const accessToken = params.get("access_token");
  const refreshToken = params.get("refresh_token");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      password,
      access_token: accessToken,
      refresh_token: refreshToken,
    };
    try {
      const res = await axiosInstance.post("/auth/update-password", formData);
      alert("good");
      const { profile } = res.data;
      dispatch(login(profile));
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } catch (e) {
      alert("failed");
    }
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
