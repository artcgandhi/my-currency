import React from "react";
import { Gap, Header } from "../../Atoms";
import "./BoxHeader.css";

const BoxHeader = (props) => {
  return (
    <div className="header-box">
      <Header headerName={props.headerCountry} />
      <Gap width={30} />
      <Header headerName={props.headerWeBuy} />
      <Gap width={30} />
      <Header headerName={props.headerExchangeRate} />
      <Gap width={30} />
      <Header headerName={props.headerWeSell} />
    </div>
  );
};

export default BoxHeader;
