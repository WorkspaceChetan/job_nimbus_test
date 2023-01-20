import { ChangeEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { isValidBracketString } from "./utils/GenericUtils";

function App() {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setIsValid(null);
  };

  const handleClickCheck = () => {
    setIsValid(isValidBracketString(text));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input
            type="text"
            name="text"
            value={text}
            onChange={handleChangeText}
            placeholder="Enter Text"
          />
          <button onClick={handleClickCheck}>Check</button>
        </p>
        {isValid !== null && (
          <h5 style={{ color: isValid ? "green" : "red", marginTop: 0 }}>
            {isValid ? "Valid" : "Invalid"}
          </h5>
        )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
