import { createRoot } from "react-dom/client";
import Order from "./Order";
import Header from "./Header";
import PizzaOfTheDay from "./PizzaOfTheDay";

const App = () => {
  return (
    <div>
      <Header />
      <Order />
      <PizzaOfTheDay />
    </div>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
