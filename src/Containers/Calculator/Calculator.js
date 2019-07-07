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

  // PUSHED RESET (AC)
  const reset = () => {
    console.log("reset");
    setFormulaToCalculate("");
    setCurrentVal("0");
  };

  // PUSHED OPERATOR BUTTON
  const operator = event => {

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
      // setFormulaToCalculate(formulaToCalculate + event.target.value);
      setFormulaToCalculate(prevVal + event.target.value);
    }

    // Reset currentVal to be ready for a new number
    setCurrentVal("");
  };

  // PUSHED DIGIT BUTTON

  const digit = event => {

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
  const decimal = event => {
  
    if (!containsDecimal.test(currentVal)) {
      setCurrentVal(currentVal + ".");
      setFormulaToCalculate(formulaToCalculate + ".");
    }
  };

  // PUSHED EQUAL SIGN TO CALCULATE RESULT
  const calculate = event => {

    let expression = formulaToCalculate;

    if (endsWithOperator.test(expression)) {
      expression = expression.slice(0, -1);
    }
    let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
//    setCurrentVal("");
//    setFormulaToCalculate(answer.toString());
    setFormulaToCalculate(formulaToCalculate + " = " + answer);
    setCurrentVal(answer);
    setHavePrevCalculation(true);
  };

  // Render formulabar with result and all the buttons

  return (
    <div className="show-buttons">
      <FormulaBar fullFormula={formulaToCalculate} valueToShow={currentVal}  />
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

export default Calculator;
