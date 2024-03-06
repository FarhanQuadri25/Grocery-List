import { useState, React } from "react";

const Content = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Farhan");
  const randomName = () => {
    const firstName = ["Farooq", "Rehan", "Ayan", "Amina"];
    const int = Math.floor(Math.random() * 4);
    setName(firstName[int]);
  };
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div>
      <h1 className="heading">Counter App</h1>
      <h1>{counter}</h1>
      <button className="first-btn" onClick={increment}>
        Increment
      </button>
      <button className="first-btn" onClick={decrement}>
        Decrement
      </button>
      <button className="first-btn" onClick={reset}>
        Reset
      </button>
      <h1 className="new-name">Hello {name} !</h1>
      <button className="first-btn" onClick={randomName}>
        Random Name Generate
      </button>
    </div>
  );
};

export default Content;
