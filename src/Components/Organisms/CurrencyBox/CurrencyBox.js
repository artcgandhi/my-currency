import React, { useEffect, useState } from "react";
import { Country, BoxHeader } from "../../Molecules";
import "./CurrencyBox.css";

const CurrencyBox = () => {
  const [myCurrency, setMyCurrency] = useState([
    {
      name: "CAD",
      rate: "",
      webuy: "312321",
      wesell: "321423",
    },
    {
      name: "EUR",
      rate: "",
      webuy: "312321",
      wesell: "321423",
    },
    {
      name: "IDR",
      rate: "",
      webuy: "312321",
      wesell: "321423",
    },
    {
      name: "JPY",
      rate: "",
      webuy: "312321",
      wesell: "321423",
    },
    {
      name: "CHF",
      rate: "",
      webuy: "312321",
      wesell: "321423",
    },
    {
      name: "GBP",
      rate: "",
      webuy: "312321",
      wesell: "321423",
    },
  ]);
  // fetch data from API and use tofixed to remove several digits after period
  const fetchRates = async () => {
    const ratesResponse = await fetch(
      "https://api.currencyfreaks.com/latest?apikey=e164ead667974323b50db78d2376c740"
    );
    const dataRates = await ratesResponse.json();
    setMyCurrency((prevState) => {
      return prevState.map((item) => {
        if (dataRates.rates.hasOwnProperty(item.name)) {
          return {
            ...item,
            rate: Number(dataRates.rates[item.name]).toFixed(2),
          };
        } else {
          return item;
        }
      });
    });
  };

  useEffect(() => {
    fetchRates();
  }, []);

  console.log(myCurrency.map((cn) => cn.rate));

  return (
    <div className="container-box">
      <BoxHeader
        headerCountry="Country"
        headerWeBuy="We Buy"
        headerExchangeRate="Exchange Rate"
        headerWeSell="We Sell"
      />
      {myCurrency.map((cn, index) => {
        return (
          <Country
            key={index}
            country={cn.name}
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
