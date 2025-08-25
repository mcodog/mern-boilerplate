import { Routes, Route } from "react-router-dom";
import "./App.css";
import Client from "./components/layouts/Client";
import Welcome from "./components/pages/Welcome/Index";
import About from "./components/pages/About/Index";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Token from "./components/pages/Auth/Token";
import Profile from "./components/pages/Profile/Index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Client />}>
        <Route index element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin-token" element={<Token />} />
    </Routes>
  );
};

export default App;
