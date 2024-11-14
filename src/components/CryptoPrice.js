// src/components/CryptoPrice.js
import React, { useState, useEffect } from 'react';

const CryptoPrice = ({ coin, currency }) => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(`/api/price/${coin}/${currency}`);
        const data = await response.json();
        setPrice(data[coin][currency]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching price:', error);
        setLoading(false);
      }
    };

    fetchPrice();
  }, [coin, currency]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>{coin.toUpperCase()} Price in {currency.toUpperCase()}: {price}</h3>
    </div>
  );
};

export default CryptoPrice;
