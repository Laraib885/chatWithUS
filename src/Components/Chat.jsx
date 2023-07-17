import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Messages } from "./Messages";
import { Input } from "./Input";

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Laraib</span>
        <div className="chatIcons">
          <AddIcon />
          <VideocamIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
