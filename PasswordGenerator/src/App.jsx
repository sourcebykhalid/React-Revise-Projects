import { useCallback, useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (number) str += "0123456789";
    if (characters) str += "@~!#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, characters, setPassword]);

  useEffect(() => {
    return () => {
      passwordGenerator();
    };
  }, [length, number, characters, passwordGenerator]);

  return (
    <>
      <div className="bg-orange-400 w-full max-w-lg ml-96 rounded-lg shadow-lg shadow-gray-100 py-4 px-6 mt-36">
        <h1 className="text-2xl text-slate-950 font-bold px-4 my-3 ">
          Use this Password Generator for Free!
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="password"
            className="outline-none w-full py-1 px-3"
          />
          <button className="text-md bg-blue-700 px-2 text-slate-50">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers: {number}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              min={8}
              max={100}
              value={characters}
              id="char"
              className="cursor-pointer"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="char">Characters: {characters}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
