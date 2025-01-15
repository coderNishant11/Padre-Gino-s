import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <div>
      <h2>Padre Gino's Pizz a – Order Now</h2>
      <Order />
    </div>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
