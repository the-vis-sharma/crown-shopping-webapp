import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

const Directory = ({ directoryList }) => {
  return (
    <div className="directory-container">
      {directoryList.map(({ id, ...otherDirectoryProps }) => (
        <MenuItem key={id} {...otherDirectoryProps} />
      ))}
    </div>
  );
};

export default Directory;
