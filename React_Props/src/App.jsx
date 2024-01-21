import "./App.css";
import Card from "./Components/Card";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(45);

  const addVal = () => {
    setCounter(counter + 5);
  };
  const removeVal = () => {
    setCounter(counter - 5);
  };
  return (
    <>
      <h1>Hello React</h1>
      <p className="bg-red-600 mb-4">This is a red paragraph.</p>
      <Card
        user="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        username="Card1"
      />
      <Card
        user="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"
        username="Card2"
      />
      <Card
        user="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEK3WGcvm3ID1Nc3Om1JSVTIBk1Y9eFeD9ZhI9Cb2oZnuxD0eVvHZ0ZjX1v734wuaHLU&usqp=CAU"
        username="Card3"
        btn="Visit me!"
      />
      <h2 className="bg-black mt-3 p-8 text-3xl text-gray-100 w-1/2 ml-80 font-bold">
        Counter value: {counter}
      </h2>
      <button
        className=" m-3 bg-red-400 p-3 rounded-md font-bold"
        onClick={addVal}
      >
        Add{" "}
      </button>
      <br />
      <button
        className=" m-3 bg-red-400 p-3 rounded-md font-bold"
        onClick={removeVal}
      >
        remove
      </button>
    </>
  );
}

export default App;
