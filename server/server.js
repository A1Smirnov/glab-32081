// server/server.js
import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;
const apiKey = "45156BFC-38C5-4B0F-AAAF-388E63885A70";

app.use(cors({ origin: 'http://localhost:3000' })); // CORS for all routes

// Route to geet Price of Coin type var
app.get("/api/price/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Errpr request to CoinAPI");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error while requesting:", error);
    res.status(500).json({ error: "Can't get data" });
  }
});

// Run server on 3001
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
