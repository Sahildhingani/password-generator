import { useEffect, useState } from 'react';

function App() {
  let [len, setLen] = useState(8);
  let [number, setNumber] = useState(false);
  let [characters, setCharacters] = useState(false);
  let [password, setPassword] = useState('');

  useEffect(() => {
    generatePassword();
  }, [number, characters, len]);

  const generatePassword = () => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let numb = '1234567890';
    let char = '!@#$%+_)(*&^';
    if (number) str += numb;
    if (characters) str += char;

    let newPassword = '';
    for (let i = 0; i < len; i++) {
      newPassword += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(newPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <>
      <div id="body" className="bg-black h-screen w-screen flex justify-center">
        <div id="container" className="h-24 w-6/12 bg-slate-600 mt-8 rounded flex flex-col gap-4 items-center">
          <div className="flex mt-3">
            <input type="text" className="bg-white h-8 w-128 rounded-l-lg" readOnly value={password} />
            <button onClick={handleCopy} className="bg-blue-700 rounded-r-lg h-8 w-20 border-blue-950 text-white font-bold">
              Copy
            </button>
          </div>
          <div className="flex gap-8">
            <div className="flex gap-1">
              <input
                min={8}
                max={20}
                defaultValue={8}
                onChange={(e) => setLen(e.target.value)}
                className=""
                type="range"
                name=""
                id=""
              />
              <label className="font-bold text-yellow-400" htmlFor="">
                Length: {len}
              </label>
            </div>
            <div>
              <input
                onChange={() => setNumber(!number)}
                type="checkbox"
                name=""
                id=""
              />
              <label className="font-bold text-yellow-400" htmlFor="Number">Number</label>
            </div>
            <div>
              <input
                onChange={() => setCharacters(!characters)}
                type="checkbox"
                name=""
                id=""
              />
              <label className="font-bold text-yellow-400" htmlFor="">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
