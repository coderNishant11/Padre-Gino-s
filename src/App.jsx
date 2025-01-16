import { createRoot } from "react-dom/client";
import Order from "./Order";
import Header from "./Header";
import PizzaOfTheDay from "./PizzaOfTheDay";
import { CartContext } from "./contexts";
import { useState } from "react";

const App = () => {
  const cartHook = useState([]);
  return (
    <CartContext.Provider value={cartHook}>
      <div>
        <Header />
        <Order />
        <PizzaOfTheDay />
      </div>
    </CartContext.Provider>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
