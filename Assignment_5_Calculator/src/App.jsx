import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    setInput((prev) => (prev === "0" ? value : prev + value));
  };

  const clearInput = () => {
    setInput("0");
  };

  const clearLastEntry = () => {
    setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
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
          {/* Buttons */}
          {"( ) C AC 7 8 9 / 4 5 6 * 1 2 3 - 0 . = +".split(" ").map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === "=") calculateResult();
                else if (btn === "AC") clearInput();
                else if (btn === "C") clearLastEntry();
                else handleClick(btn);
              }}
              className={`button ${btn === "AC" ? "clear-button" : ""}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
