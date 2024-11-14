// ./src/components/Price.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const params = useParams();
  const symbol = params.symbol;  // Получаем символ криптовалюты из URL
  const url = `http://localhost:3001/api/price/${symbol}`;  // URL на сервере

  const [coin, setCoin] = useState(null);

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error("Connection error while receiving data:", e);
    }
  };

  useEffect(() => {
    getCoin();
  }, [symbol]);

  const loaded = () => {
    return (
      <div>
        <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return coin && coin.rate ? loaded() : loading();
}
