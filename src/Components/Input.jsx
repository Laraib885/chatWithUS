import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something" />
      <div className="send">
        <img src="" alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src="" alt="" />
        </label>
        <AttachFileIcon />
        <button>Send</button>
      </div>
    </div>
  );
};
