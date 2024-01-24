import "./App.css";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("#B7B6C2");

  return (
    <>
      <div
        className="w-full h-screen duration-200 shadow-xl shadow-orange-700"
        style={{ backgroundColor: color }}
      >
        <h1 className="bg-transparent text-3xl font-extrabold text-slate-950 shadow-lg shadow-red-400 ">
          Click the buttons on bottom line to change background color
        </h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg shadow-red-700 bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("blue")}
              className="outline-none text-white px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("red")}
              className="outline-none text-white px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none text-white px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none text-white px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
