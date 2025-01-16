import { useEffect, useState, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.name}` : "Loading...");

  useEffect(() => {
    async function fetchPizzzOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }
    fetchPizzzOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
