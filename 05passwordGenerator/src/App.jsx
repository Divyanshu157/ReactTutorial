import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  // Ref for input
  const passwordRef = useRef(null);

  // Password generator function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Auto-generate password whenever settings change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  // Copy password function using useRef
  const copyPasswordToClipboard = () => {
    passwordRef.current?.select(); // Select the text inside input
    passwordRef.current?.setSelectionRange(0, 999); // Mobile support
    document.execCommand("copy"); // Copy command
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 text-white">
        <h1 className="text-2xl font-bold text-center mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex items-center gap-2 bg-white/20 rounded-lg p-2 mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full bg-transparent outline-none px-2 text-lg font-mono tracking-wide"
            placeholder="Your password will appear here..."
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          {/* Length Slider */}
          <div>
            <label className="flex justify-between mb-1">
              <span>Password Length</span>
              <span className="font-bold">{length}</span>
            </label>
            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-orange-500"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="accent-orange-500"
              />
              <span>Include Numbers</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="accent-orange-500"
              />
              <span>Include Symbols</span>
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl text-lg font-semibold transition"
        >
          🔄 Regenerate Password
        </button>
      </div>
    </div>
  );
}

export default App;
