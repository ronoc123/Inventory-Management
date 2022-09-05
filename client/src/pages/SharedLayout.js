import Navbar from "../components/Navbar.js";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.js";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
