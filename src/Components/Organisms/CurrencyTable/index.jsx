import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import "./styles.module.css";

const CurrencyTable = () => {
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
    <>
      {loading === true ? (
        <HashLoader
          color={"white"}
          loading={true}
          size={30}
          cssOverride={{ alignSelf: "center" }}
        />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            {myCurrency.map((row, index) => (
              <tr key={index.toString()}>
                <td>{row.name}</td>
                <td>{row.webuy}</td>
                <td>{row.rate}</td>
                <td>{row.wesell}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CurrencyTable;
