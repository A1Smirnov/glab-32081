// server/routes/cryptoRoutes.js
import express from 'express';
import { getCryptoPrice } from '../coinGecko.js'; // Функция для получения данных о криптовалюте

const router = express.Router();

// Маршрут для получения данных о криптовалюте
router.get('/price/:symbol', async (req, res) => {
  const { symbol } = req.params;  // Извлекаем параметр symbol из URL
  try {
    const price = await getCryptoPrice(symbol, 'usd');  // Предположим, что мы всегда запрашиваем цену в долларах
    res.json(price);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching price' });
  }
});

export default router;
