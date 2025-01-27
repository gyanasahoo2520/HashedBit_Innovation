import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input
          type="text"
          value={input}
          readOnly
          className="calculator-display"
        />
        <div className="calculator-buttons">
          {"7 8 9 / 4 5 6 * 1 2 3 - 0 . = +".split(" ").map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "=" ? calculateResult() : handleClick(btn)
              }
              className="button"
            >
              {btn}
            </button>
          ))}
          <button onClick={clearInput} className="button clear-button">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
