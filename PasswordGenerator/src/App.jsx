import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
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
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    return () => {
      passwordGenerator();
    };
  }, [length, number, characters, passwordGenerator]);

  return (
    <>
      <h1 className="bg-black text-center text-gray-400 font-bold text-2xl  mt-2 w-full max-w-lg ml-96 py-2 shadow-xl rounded-lg shadow-slate-400 hover:bg-orange-400 cursor-pointer">
        Password Generator
      </h1>
      <div className="bg-orange-400 w-full max-w-lg ml-96 rounded-lg shadow-lg shadow-gray-100 py-4 px-6 mt-12 pb-24 font-bold">
        <h1 className="text-2xl text-slate-950 font-bold px-4 my-3 ">
          Use this Password Generator for Free!
        </h1>
        <div className="flex mb-4 shadow-lg shadow-slate-950 rounded-xl ">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="password"
            className="outline-none w-full py-1 px-3 "
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="text-md bg-blue-700 px-2 text-slate-50 hover:bg-black"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={8}
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
        <div className="mt-6">
          <img
            className="rounded-lg bg-black"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkGb2XUwcBCp0c7NB9HIHuG7ZspCtkw1YaDLoI4fdxZxBnvec0vVXBsuBiiQCulxID6dxYBXTs2dbnqgREeXViqoDfrUehCIloexxFEOTpdNvmT0SXQ3zrG6fjbjBZHoT-jGd8t_Z36chtfxZ1wOvmmf9MziUzqwvZzMYTgMYbE47ngR59dPWSunt62uc/s1600/lfralq4h4hu41p6uys3i.jpeg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
