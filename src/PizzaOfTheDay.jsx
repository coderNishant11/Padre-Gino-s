import { usePizzaOfTheDay } from "./usePizzaOfTheDay";
const intl = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the day</h2>
      <div className="pizza-of-the-day-info">
        <h3>{pizzaOfTheDay.name}</h3>
        <p>{pizzaOfTheDay.description}</p>
        <p className="pizza-of-the-day-price">
          From : <span>{intl.format(pizzaOfTheDay.sizes.S)}</span>
        </p>
      </div>
      <img
        className="pizza-of-the-day-image"
        src={pizzaOfTheDay.image}
        alt={pizzaOfTheDay.name}
      />
    </div>
  );
};

export default PizzaOfTheDay;
