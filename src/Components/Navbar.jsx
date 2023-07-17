import React from "react";
import Img from "../Images/me.jpeg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">chat_with_us</span>
      <div className="user">
        <img src={Img} alt="" />
        <span>Laraib</span>
        <button>Logout</button>
      </div>
    </div>
  );
};
