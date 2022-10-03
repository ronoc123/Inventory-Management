import React from "react";
import Wrapper from "../assests/Wappers/Navbar";
import { SiGoogletagmanager, SiManageiq } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { openSidebar, closeSidebar, navSidebar, logout } = useAppContext();

  const logoutUser = () => {
    logout();
  };

  return (
    <Wrapper>
      <div className="logo-container">
        <div className="logo-containers">
          <span className="icon">
            <SiGoogletagmanager></SiGoogletagmanager>
          </span>
          <span className="title">PontexIM</span>
        </div>
      </div>
      <div className="links-container">
        <Link to={"/"} className="big-screen">
          Home
        </Link>
        <Link to={"/inventory"} className="big-screen">
          Inventory
        </Link>
        <Link to={"/transaction"} className="big-screen">
          History
        </Link>
        <Link to={"/report"} className="big-screen">
          Transaction
        </Link>
      </div>
      <div className="logout-container">
        <button className="logout-btn big-screen" onClick={logoutUser}>
          Logout
        </button>
        <button className="small-screen" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
