import React from "react";
import { Gap, Header } from "../../Atoms";
import "./BoxHeader.css";

const BoxHeader = (props) => {
  return (
    <div className="header-box">
      <Header headerName={props.headerCountry} className="box-header-country" />

      <Header headerName={props.headerWeBuy} />

      <Header headerName={props.headerExchangeRate} />

      <Header headerName={props.headerWeSell} />
    </div>
  );
};

export default BoxHeader;
