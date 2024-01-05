import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(670);
  const addValue = () => {
    setValue(value + 10);
  };
  const subValue = () => {
    setValue(value - 10);
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
