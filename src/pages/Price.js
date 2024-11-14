// ./src/components/Price.js

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Price() {
  const apiKey = "45156BFC-38C5-4B0F-AAAF-388E63885A70";
  const { symbol } = useParams();
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  const [coin, setCoin] = useState(null);

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCoin();
  }, [symbol]);

  const loaded = () => (
    <div>
      <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
      <h2>{coin.rate}</h2>
    </div>
  );

  return coin && coin.rate ? loaded() : <h1>Loading...</h1>;
}
