import React from "react";
import Img from "../Images/me.jpeg";
export const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Img} />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={Img} />
      </div>
    </div>
  );
};
