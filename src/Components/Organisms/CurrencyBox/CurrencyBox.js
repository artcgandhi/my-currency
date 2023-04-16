import React, { useEffect, useState } from "react";
import { Country, BoxHeader } from "../../Molecules";
import HashLoader from "react-spinners/HashLoader";
import "./CurrencyBox.css";

const CurrencyBox = () => {
  const [loading, setLoading] = useState(false);
  const [myCurrency, setMyCurrency] = useState([
    {
      name: "CAD",
      rate: "",
      webuy: "",
      wesell: "",
    },
    {
      name: "EUR",
      rate: "",
      webuy: "",
      wesell: "",
    },
    {
      name: "IDR",
      rate: "",
      webuy: "",
      wesell: "",
    },
    {
      name: "JPY",
      rate: "",
      webuy: "",
      wesell: "",
    },
    {
      name: "CHF",
      rate: "",
      webuy: "",
      wesell: "",
    },
    {
      name: "GBP",
      rate: "",
      webuy: "",
      wesell: "",
    },
  ]);

  useEffect(() => {
    setLoading(true);
    fetchRates();
  }, []);

  const fetchRates = async () => {
    const ratesResponse = await fetch(
      "https://api.currencyfreaks.com/latest?apikey=e164ead667974323b50db78d2376c740"
    );
    const dataRates = await ratesResponse.json();
    setMyCurrency((prevState) => {
      return prevState.map((item) => {
        if (dataRates.rates.hasOwnProperty(item.name)) {
          const exchangeRate = Number(dataRates.rates[item.name]).toFixed(2);
          console.log("ini exchangerate", exchangeRate);
          return {
            ...item,
            rate: exchangeRate,
            webuy: (Number(exchangeRate) + Number(exchangeRate) * 0.05).toFixed(2),
            wesell: (Number(exchangeRate) - Number(exchangeRate) * 0.05).toFixed(2),
          };
        } else {
          return item;
        }
      });
    });
    setLoading(false);
  };

  return (
    <div className="container-box">
      <BoxHeader
        headerCountry="Country"
        headerWeBuy="We Buy"
        headerExchangeRate="Exchange Rate"
        headerWeSell="We Sell"
      />
      {loading === true ? (
        <HashLoader
          color={"white"}
          loading={true}
          size={30}
          cssOverride={{ alignSelf: "center" }}
        />
      ) : (
        myCurrency.map((cn, index) => {
          return (
            <Country
              key={index}
              country={cn.name}
              weBuy={cn.webuy}
              exchangeRate={cn.rate}
              weSell={cn.wesell}
            />
          );
        })
      )}
    </div>
  );
};

export default CurrencyBox;
