import React from "react";
import "./Header.css";

const Header = ({ headerName, ...rest }) => {
  return <div {...rest}>{headerName}</div>;
};

export default Header;
