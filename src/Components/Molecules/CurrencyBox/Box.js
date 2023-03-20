import React, { useState } from "react";
import { Header, Text } from "../../Atoms";

import "./Box.css";

const Box = (props) => {
  const [rate, setRate] = useState([]);
  return (
    <div className="container-box">
      <div className="container country">
        <Header headerName="Currency" />
        <Text textContent="CAD" />
        <Text textContent="EUR" />
        <Text textContent="IDR" />
        <Text textContent="JPY" />
        <Text textContent="CHF" />
        <Text textContent="GBP" />
      </div>
      <div className="container webuy">
        <Header headerName="We Buy" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
      </div>
      <div className="container exchangerate">
        <Header headerName="Exchange Rate" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
      </div>
      <div className="container wesale">
        <Header headerName="We Sale" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
        <Text textContent="12345" />
      </div>
    </div>
  );
};

export default Box;
