import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  let items = ["New York", "San Fransisco", "Tokyo", "London"];
  let handleSelectItem = (item: String) => {
    console.log(item);
  };
  const [AlertVisibility, SetAlertVisibility] = useState(false);
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });
  const handleClick = () => {
    drink.price = 6;
    setDrink(drink);
  };
  return (
    <>
      <button onClick={decrement} className="p-4 m-4 border-2 ">
        -
      </button>
      <span>{count}</span>
      <button onClick={increment} className="p-4 m-4 border-2 ">
        +
      </button>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        ></ListGroup>

        {AlertVisibility && (
          <Alert onClick={() => SetAlertVisibility(false)}>Alert!!!</Alert>
        )}
        <Button color="green" onClick={() => SetAlertVisibility(true)}>
          Sign Up
        </Button>
        <IoMenuOutline color="blue" size="50" />
        <Like onClick={() => console.log("clicked")} />
        <div>
          {drink.price}
          <Button onClick={handleClick}>Click Me</Button>
        </div>
      </div>
    </>
  );
}

export default App;
