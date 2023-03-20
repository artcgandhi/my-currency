import React from "react";

const Text = ({ textContent, ...rest }) => {
  return <div {...rest}>{textContent}</div>;
};

export default Text;
