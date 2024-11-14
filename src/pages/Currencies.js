// ./src/components/Currencies.js

import { Link } from "react-router-dom";

export default function Currencies() {
  const currencies = [
    { name: "Bitcoin", symbol: "bitcoin" },  // Символы должны быть в формате, который ожидает API CoinGecko
    { name: "Litecoin", symbol: "litecoin" },
    { name: "Ethereum", symbol: "ethereum" },
    { name: "Ethereum Classic", symbol: "ethereum-classic" },
    { name: "Stellar Lumens", symbol: "stellar" },
    { name: "Dash", symbol: "dash" },
    { name: "Ripple", symbol: "ripple" },
    { name: "Zcash", symbol: "zcash" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => (
        <Link to={`/price/${coin.symbol}`} key={coin.symbol}>
          <h2>{coin.name}</h2>
        </Link>
      ))}
    </div>
  );
}
