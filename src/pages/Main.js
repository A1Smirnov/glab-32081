// ./src/components/Main.js

import React from 'react';
import CryptoPrice from '../components/CryptoPrice.js';

const Main = () => {
  return (
    <div>
      <h1>Crypto Prices</h1>
      <CryptoPrice coin="ethereum" currency="usd" />
      <CryptoPrice coin="bitcoin" currency="usd" />
    </div>
  );
};

export default Main;