import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(6);
  const addValue = () => {
    if (value <= 20) {
      setValue(value + 1);
    } else {
      alert("You can't add more than 50");
    }
  };
  const subValue = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      alert("You can't go below zero");
    }
  };
  return (
    <>
      <h1>Counter App</h1>
      <h3>Count value is {value}</h3>
      <button onClick={addValue}>Increment</button>
      <br />
      <hr />
      <button onClick={subValue}>Decrement</button>
    </>
  );
}

export default App;
