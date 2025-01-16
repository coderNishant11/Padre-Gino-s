import { useEffect, useState } from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

const Order = () => {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  let selectedPizza, price;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizza.id === pizzaType);
    price = intl.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  async function fetchPizzaTypes() {
    const response = await fetch("/api/pizzas");
    const jsonRes = await response.json();
    setPizzaTypes(jsonRes);
    setLoading(false);
  }
  return (
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form action="">
          <div>
            <div>
              <label htmlFor="Pizza-type"> Pizza Type</label>
              <select
                onChange={(e) => setPizzaType(e.target.value)}
                name="pizza-type"
                value={pizzaType}
              >
                {pizzaTypes.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
            <button>Submit</button>
          </div>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <div className="order-pizza">
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />

              <p>{price}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Order;
