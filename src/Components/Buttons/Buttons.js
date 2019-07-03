import React, { useState } from "react";
import "./Buttons.css";

// BUTTONS
const buttons = props => {
  // State

  const [formulaToCalculate, setFormulaToCalculate] = useState("");
  const [currentVal, setCurrentVal] = useState("");

  // Onclick-handlers for the buttons

  const reset = () => {
    console.log("pushed");
  };

  const operator = event => {
    console.log("Operator: " + event.target.value);
    setFormulaToCalculate("5");
  };

  const digit = event => {
    console.log("Digit: " + event.target.value);
  };

  const decimal = event => {
    console.log("Decimal: " + event.target.value);
  };

  const calculate = event => {
    console.log("Calculate: " + event.target.value);
    console.log("value", formulaToCalculate);
  };

  return (
    <div className="show-buttons">
      <button id="clear" value="AC" className="big-button" onClick={reset}>
        AC
      </button>
      <button id="divide" value="/" className="small-button" onClick={operator}>
        /
      </button>
      <button
        id="multiply"
        value="*"
        className="small-button"
        onClick={operator}
      >
        X
      </button>
      <button id="seven" value="7" className="small-button" onClick={digit}>
        7
      </button>
      <button id="eight" value="8" className="small-button" onClick={digit}>
        8
      </button>
      <button id="nine" value="9" className="small-button" onClick={digit}>
        9
      </button>
      <button
        id="subtract"
        value="-"
        className="small-button"
        onClick={operator}
      >
        -
      </button>
      <button id="four" value="4" className="small-button" onClick={digit}>
        4
      </button>
      <button id="five" value="5" className="small-button" onClick={digit}>
        5
      </button>
      <button id="six" value="6" className="small-button" onClick={digit}>
        6
      </button>
      <button id="add" value="+" className="small-button" onClick={operator}>
        +
      </button>
      <button id="one" value="1" className="small-button" onClick={digit}>
        1
      </button>
      <button id="two" value="2" className="small-button" onClick={digit}>
        2
      </button>
      <button id="three" value="3" className="small-button" onClick={digit}>
        3
      </button>
      <button
        id="equals"
        value="="
        className="vertical-button"
        onClick={calculate}
      >
        =
      </button>
      <button id="zero" value="0" className="big-button" onClick={digit}>
        0
      </button>
      <button id="decimal" value="." className="small-button" onClick={decimal}>
        .
      </button>
    </div>
  );
};

export default buttons;
