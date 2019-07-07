import React, { useState } from "react";

import FormulaBar from "../../Components/FormulaBar/FormulaBar";
import "./Calculator.css";

// BUTTONS
const Calculator = props => {
  const endsWithOperator = /[*+-/]$/;
  const containsDecimal = /[.]/;

  const [formulaToCalculate, setFormulaToCalculate] = useState("");
  const [currentVal, setCurrentVal] = useState("0");
  const [havePrevCalculation, setHavePrevCalculation] = useState(false);

  // Onclick-handlers for the buttons

  const handleReset = () => {
    setFormulaToCalculate("");
    setCurrentVal("0");
  };

  const handleOperator = event => {

    let prevVal = formulaToCalculate;    
    if (havePrevCalculation) {
      setHavePrevCalculation(false);
      prevVal = currentVal;
    }

    // Check if formulaToCalculate already ends with an operator. If so, remove it and replace with the operator just entered
    // Then add current entered value to formulaToCalculate
    if (endsWithOperator.test(formulaToCalculate)) {
      setFormulaToCalculate(
        formulaToCalculate.slice(0, -1) + event.target.value
      );
    } else {
      setFormulaToCalculate(prevVal + event.target.value);
    }

    // Reset currentVal to be ready for a new number
    setCurrentVal("");
  };

  // PUSHED DIGIT BUTTON

  const handleDigit = event => {

    if (havePrevCalculation) {
      setHavePrevCalculation(false);
      setCurrentVal(event.target.value);
      setFormulaToCalculate("" + event.target.value);
    } else {
      if (currentVal === "0") {
       setCurrentVal("" + event.target.value);
      } else {
        setCurrentVal(currentVal + event.target.value);
      }
      setFormulaToCalculate(formulaToCalculate + event.target.value);
    }
  };

  // PUSHED DECIMAL BUTTON
  const handleDecimal = event => {
  
    if (!containsDecimal.test(currentVal)) {
      setCurrentVal(currentVal + ".");
      setFormulaToCalculate(formulaToCalculate + ".");
    }
  };

  // PUSHED EQUAL SIGN TO CALCULATE RESULT
  const handleCalculate = event => {

    let expression = formulaToCalculate;

    if (endsWithOperator.test(expression)) {
      expression = expression.slice(0, -1);
    }
    // eslint-disable-next-line
    let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;

    setFormulaToCalculate(formulaToCalculate + " = " + answer);
    setCurrentVal(answer);
    setHavePrevCalculation(true);
  };

  // Render formulabar with result and all the buttons

  return (
    <div className="show-buttons">
      <FormulaBar fullFormula={formulaToCalculate} valueToShow={currentVal}  />
      <button id="clear" value="AC" className="big-button" onClick={handleReset}>
        AC
      </button>
      <button id="divide" value="/" className="small-button" onClick={handleOperator}>
        /
      </button>
      <button
        id="multiply"
        value="*"
        className="small-button"
        onClick={handleOperator}
      >
        X
      </button>
      <button id="seven" value="7" className="small-button" onClick={handleDigit}>
        7
      </button>
      <button id="eight" value="8" className="small-button" onClick={handleDigit}>
        8
      </button>
      <button id="nine" value="9" className="small-button" onClick={handleDigit}>
        9
      </button>
      <button
        id="subtract"
        value="-"
        className="small-button"
        onClick={handleOperator}
      >
        -
      </button>
      <button id="four" value="4" className="small-button" onClick={handleDigit}>
        4
      </button>
      <button id="five" value="5" className="small-button" onClick={handleDigit}>
        5
      </button>
      <button id="six" value="6" className="small-button" onClick={handleDigit}>
        6
      </button>
      <button id="add" value="+" className="small-button" onClick={handleOperator}>
        +
      </button>
      <button id="one" value="1" className="small-button" onClick={handleDigit}>
        1
      </button>
      <button id="two" value="2" className="small-button" onClick={handleDigit}>
        2
      </button>
      <button id="three" value="3" className="small-button" onClick={handleDigit}>
        3
      </button>
      <button
        id="equals"
        value="="
        className="vertical-button"
        onClick={handleCalculate}
      >
        =
      </button>
      <button id="zero" value="0" className="big-button" onClick={handleDigit}>
        0
      </button>
      <button id="decimal" value="." className="small-button" onClick={handleDecimal}>
        .
      </button>
    </div>
  );
};

export default Calculator;
