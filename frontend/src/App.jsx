import { Routes, Route } from "react-router-dom";
import "./App.css";
import Client from "./components/layouts/Client";
import Welcome from "./components/pages/Welcome/Index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Client />}>
        <Route index element={<Welcome />} />
      </Route>
    </Routes>
  );
};

export default App;
