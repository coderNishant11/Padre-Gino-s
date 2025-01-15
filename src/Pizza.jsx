const Pizza = (props) => {
  return (
    <div className="pizza">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default Pizza;
