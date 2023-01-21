import { ChangeEvent, useState } from "react";
import "./App.css";
import { GenericUtils } from "./utils";

function App() {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setIsValid(null);
  };

  const handleClickValidate = () => {
    setIsValid(GenericUtils.isValidBracketString({ input: text }));
  };

  return (
    <div className="App">
      <p>
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleChangeText}
          placeholder="Enter your input to validate"
        />
        <button onClick={handleClickValidate}>Validate</button>
      </p>
      {isValid !== null && (
        <h5 style={{ color: isValid ? "green" : "red", marginTop: 0 }}>
          {isValid ? "Valid" : "Invalid"}
        </h5>
      )}
    </div>
  );
}

export default App;
