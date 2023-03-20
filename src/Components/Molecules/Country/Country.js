import React from "react";
import { Header, Text } from "../../Atoms";

const Country = (props) => {
  return (
    <div className="country-wrapper">
      <Header headerName={props.country} />
      <Text textContent={props.weBuy} />
      <Text textContent={props.exchangeRate} />
      <Text textContent={props.weSell} />
    </div>
  );
};

export default Country;
