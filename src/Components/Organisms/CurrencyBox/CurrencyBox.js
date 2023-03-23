import React, { useEffect, useState } from "react";
import { Country, BoxHeader } from "../../Molecules";
import HashLoader from "react-spinners/HashLoader";
import "./CurrencyBox.css";

const CurrencyBox = () => {
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
  // change the value of webuy and wesell using
  // the previous value of rate added to the previous value of rate multiply by 0.05 or 5%
  // and then using tofixed(2) to remove several digits after period and convert it to string
  const setPercentage = () => {
    setMyCurrency((prevState) => {
      return prevState.map((e) => {
        return {
          ...e,
          webuy: (Number(e.rate) + Number(e.rate) * 0.05).toFixed(2),
          wesell: (Number(e.rate) - Number(e.rate) * 0.05).toFixed(2),
        };
      });
    });
  };

  const someCurrency = myCurrency.some((e) => e.rate !== "");
  useEffect(() => {
    if (someCurrency) {
      setPercentage();
    } else {
      fetchRates();
    }
  }, [someCurrency]);

  return (
    <div className="container-box">
      <BoxHeader
        headerCountry="Country"
        headerWeBuy="We Buy"
        headerExchangeRate="Exchange Rate"
        headerWeSell="We Sell"
      />
      {someCurrency === false ? (
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
