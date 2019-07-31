import React, { useState } from "react";

import FormulaBar from "../../Components/FormulaBar/FormulaBar";
import Buttons from "../../Components/Buttons/Buttons";
import "./Calculator.css";

// BUTTONS
const Calculator = props => {
  const endsWithOperator = /[*+-/]$/;
  const containsDecimal = /[.]/;

  const [formulaToCalculate, setFormulaToCalculate] = useState("");
  const [currentVal, setCurrentVal] = useState("0");
  const [havePrevCalculation, setHavePrevCalculation] = useState(false);
  const [tempFormulaDisplay, setTempFormulaDisplay] = useState("");

  // Onclick-handlers for the buttons

  const handleReset = () => {
    setFormulaToCalculate("");
    setHavePrevCalculation(false);
    setTempFormulaDisplay("");
    setCurrentVal("0");
  };

  const handleOperator = event => {
    let prevVal = formulaToCalculate;
    if (havePrevCalculation) {
      setHavePrevCalculation(false);
      prevVal = currentVal;
      setTempFormulaDisplay(currentVal + event.target.value);
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

    let answer;
    try {
      // eslint-disable-next-line
      answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      setTempFormulaDisplay(formulaToCalculate + " = " + answer);
    } catch (error) {
      console.log("ERROR: " + error);
      setTempFormulaDisplay("ERROR");
    }

    setFormulaToCalculate("");
    setCurrentVal(answer);
    setHavePrevCalculation(true);
  };

  // Render formulabar with result and all the buttons

  return (
    <div id="calc-wrapper">
      Calc v0.2
      <FormulaBar
        fullFormula={
          setHavePrevCalculation ? tempFormulaDisplay : formulaToCalculate
        }
        valueToShow={currentVal}
      />
      <Buttons
        digit={handleDigit}
        operator={handleOperator}
        calculate={handleCalculate}
        reset={handleReset}
        decimal={handleDecimal}
      />
    </div>
  );
};

export default Calculator;
