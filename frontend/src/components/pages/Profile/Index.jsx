import React from "react";
import { useEffect } from "react";
import axiosInstance from "../../../utils/axiosInstance";

const Profile = () => {
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await axiosInstance.get("/users/");
        console.log(profile);
      } catch (e) {
        alert("error retrieving profile");
      }
    };

    fetchProfile();
  }, []);
  return <div>Profile</div>;
};

export default Profile;
