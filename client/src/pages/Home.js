import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assests/Wappers/Home";
import image from "../assests/images/homepagepic.jpg";

import { useAppContext } from "../context/appContext";

const Home = () => {
  const { user } = useAppContext();
  return (
    <Wrapper>
      <div className="header">
        <h1 className="title">Pontex Inventory Management</h1>
      </div>
      <div className="main">
        <div className="text">
          <h2 className="name">Welcome {user}!</h2>
          <p className="font">
            PIM is an inventory assistance application that allows the user to
            track the status of multiple different products and transactions.{" "}
          </p>
          <Link to={"/inventory"} className="start-btn">
            Start Tracking
          </Link>
        </div>
        <div className="img">
          <img src={image} alt="" className="image" />
        </div>
      </div>
      <div className="earth">
        <div className="earth-container">
          <h1>Used Globally</h1>
          <div></div>
          <h1>Efficient Tracking</h1>
          <div></div>
          <h1>Organization</h1>
          <div></div>
        </div>
      </div>
      <div className="footer">
        <h1>Contact Us</h1>
        <div></div>
        <Link to={"/register"}>Logout</Link>
      </div>
    </Wrapper>
  );
};

export default Home;
