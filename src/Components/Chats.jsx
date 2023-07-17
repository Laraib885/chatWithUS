import React from "react";
import Img from "../Images/me.jpeg";

export const Chats = () => {
  return (
    <div className="chats">
      
      <div className="userChat">
        <img src={Img} />
        <div className="userChatInfo">
          <span>Naveed</span>
          <p> Hello</p>
        </div>
      </div>
    </div>
  );
};
