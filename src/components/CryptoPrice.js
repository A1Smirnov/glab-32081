// ./src/components/CryptoPrice.js

import { useState, useEffect } from "react";

const CryptoPrice = ({ coin, currency }) => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`
        );
        const data = await response.json();
        setPrice(data[coin][currency]);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchPrice();
  }, [coin, currency]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching price: {error.message}</div>;
  }

  return (
    <div>
      <h3>{coin} Price</h3>
      <p>{price} {currency.toUpperCase()}</p>
    </div>
  );
};

export default CryptoPrice;
