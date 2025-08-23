import { Outlet } from "react-router-dom";
import Header from "../partials/Header";

const Client = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Client;
