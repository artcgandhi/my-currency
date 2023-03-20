import React from "react";
import { Gap, Header, Text } from "../../Atoms";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="country-wrapper">
      <Header headerName={props.country} className="country-header" />
      <Text textContent={props.weBuy} />
      <Text textContent={props.exchangeRate} />
      <Text textContent={props.weSell} />
    </div>
  );
};

export default Country;
