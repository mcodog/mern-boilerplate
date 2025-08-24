import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

const Token = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("processing");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleTokenAuth = async () => {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);

      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (!accessToken) {
        setStatus("error");
        setErrorMessage("No access token found in URL");
        setTimeout(() => navigate("/"), 3000);
        return;
      }

      try {
        const formData = new FormData();
        formData.append("access_token", accessToken);
        formData.append("refresh_token", refreshToken);

        await axiosInstance.post("/auth/signin-token", formData);

        setStatus("success");
        setTimeout(() => navigate("/"), 2000);
      } catch (error) {
        console.error("Token authentication failed:", error);
        setStatus("error");
        setErrorMessage(error.response?.data?.message || "Authentication failed. Please try again.");
        setTimeout(() => navigate("/"), 3000);
      }
    };

    handleTokenAuth();
  }, [navigate]);

  const renderMessage = () => {
    switch (status) {
      case "processing":
        return <div>Processing authentication...</div>;
      case "success":
        return <div style={{color: "green"}}>Authentication successful! Redirecting...</div>;
      case "error":
        return (
          <div>
            <div style={{color: "red"}}>Authentication failed</div>
            <div>{errorMessage}</div>
            <div>Redirecting to home page...</div>
          </div>
        );
      default:
        return <div>Processing authentication...</div>;
    }
  };

  return renderMessage();
};

export default Token;
