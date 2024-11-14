import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const { symbol } = useParams(); // Получаем символ криптовалюты из URL
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`;

  // Функция для получения данных о цене
  const getCoin = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error fetching coin data');
      }
      const data = await response.json();
      setCoin(data[symbol]);
      setLoading(false); // Останавливаем индикатор загрузки
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCoin(); // Запрос при изменении символа криптовалюты
  }, [symbol]);

  // Рендерим компонент в зависимости от состояния загрузки или ошибки
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>{symbol.toUpperCase()}</h1>
      <h2>Price: ${coin?.usd}</h2> {/* Отображаем цену в долларах */}
    </div>
  );
}
