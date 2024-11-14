// ./server/coinGecko.js

import axios from 'axios';

export const getCryptoPrice = async (coin, currency) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: coin,
        vs_currencies: currency,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from CoinGecko API:', error);
    throw error;
  }
};

export const getCoinData = async (coin, currency) => {
  // Ваша функция для получения данных о монете, например:
  try {
    const data = await getCryptoPrice(coin, currency);  // Вызов функции для получения цены
    return data;
  } catch (error) {
    throw error;
  }
};
