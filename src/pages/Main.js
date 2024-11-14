// ./src/components/Main.js

import React from 'react';
import CryptoPrice from '../components/CryptoPrice.js';

const Main = () => {
  const currencies = [
    { name: "Bitcoin", symbol: "bitcoin" },
    { name: "Litecoin", symbol: "litecoin" },
    { name: "Ethereum", symbol: "ethereum" },
    { name: "Ethereum Classic", symbol: "ethereum-classic" },
    { name: "Stellar Lumens", symbol: "stellar" },
    { name: "Dash", symbol: "dash" },
    { name: "Ripple", symbol: "ripple" },
    { name: "Zcash", symbol: "zcash" },
  ];

  return (
    <div>
      <h1>Crypto Prices</h1>
      {currencies.map((coin) => (
        <CryptoPrice key={coin.symbol} coin={coin.symbol} currency="usd" />
      ))}
    </div>
  );
};

export default Main;
