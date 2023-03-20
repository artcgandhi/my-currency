import React, { useState } from "react";
import { Country, BoxHeader } from "../../Molecules";
import "./CurrencyBox.css";

const CurrencyBox = (props) => {
  const [rate, setRate] = useState([
    {
      country: "CAD",
      rate: "12.232",
      webuy: "12.532",
      wesell: "12.000",
    },
    {
      country: "EUR",
      rate: "18.940",
      webuy: "19.150",
      wesell: "18.800",
    },
    {
      country: "IDR",
      rate: "15.000",
      webuy: "15.900",
      wesell: "14.500",
    },
  ]);
  return (
    <div className="container-box">
      <BoxHeader
        headerCountry="Country"
        headerWeBuy="We Buy"
        headerExchangeRate="Exchange Rate"
        headerWeSell="We Sell"
      />
      {rate.map((cn) => {
        return (
          <Country
            country={cn.country}
            weBuy={cn.webuy}
            exchangeRate={cn.rate}
            weSell={cn.wesell}
          />
        );
      })}
    </div>
  );
};

export default CurrencyBox;
