import React from "react";
import Calculator from './Containers/Calculator/Calculator';

import "./App.css";

const app = props => {
    return (
      <Calculator />
    )
}




/* OLD CODE

const endsWithOperator = /[*+-/]$/,
  isOperator = /[x/+‑]/;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: "0",
      prevVal: "0",
      formulaToCalculate: "",
      valToShow: "0",
      evaluated: false
    };
    this.handleDigit = this.handleDigit.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
    this.resetCalc = this.resetCalc.bind(this);
  }

  // User pushed a digit
  handleDigit(e) {
    console.log("[App.js] handleDigit");
    let targetValue = e.target.value;
    this.setState((prevState, props) => {
      return {
        currentVal: targetValue,
        formulaToCalculate: prevState.formulaToCalculate + targetValue,
        valToShow: (prevState.valToShow + targetValue).replace(/^0/, "")
      };
    });
  }

  // User pushed an operator
  handleOperator(e) {
    // Test if formula was just evaluated
    // If so: include prevVal in formula
    console.log("[App.js] handleOperator");
    let targetValue = e.target.value;

    if (this.state.evaluated) {
      this.setState((prevState, props) => {
        return {
          evaluated: false,
          formulaToCalculate: prevState.prevVal + targetValue
        };
      });
    } else {
      if (endsWithOperator.test(this.state.formulaToCalculate.slice(-1))) {
        this.setState((prevState, props) => {
          return {
            formulaToCalculate:
              prevState.formulaToCalculate.slice(0, -1) + targetValue,
            valToShow: "0"
          };
        });
      } else {
        this.setState((prevState, props) => {
          return {
            formulaToCalculate: prevState.formulaToCalculate + targetValue,
            valToShow: "0"
          };
        });
      }
    }
  }

  // User pushed the decimal point (.)
  handleDecimal() {
    if (!this.state.formulaToCalculate.includes(".")) {
      this.setState((prevState, props) => {
        return {
          formulaToCalculate: prevState.formulaToCalculate + ".",
          valToShow: prevState.formulaToCalculate + "."
        };
      });
    }
  }

  // Calculate result when = button is clicked
  handleCalculate() {
    let expression = this.state.formulaToCalculate;
    if (endsWithOperator.test(expression)) {
      expression = expression.slice(0, -1);
    }
    console.log("expression = " + expression);
    let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
    this.setState({
      valToShow: answer.toString(),
      currentVal: "0",
      prevVal: answer,
      formulaToCalculate: "",
      evaluated: true
    });
  }

  // Reset calculator
  resetCalc() {
    console.log("reset");
    this.setState({
      currentVal: "0",
      nextVal: "0",
      prevVal: "0",
      formulaToCalculate: "",
      valToShow: "0"
    });
  }

  // Render calculator elements
  render() {
    return (
      <Aux>
        <div className="calcWrapper">
          <Formula formulaToShow={this.state.formulaToCalculate} />
          <Result valToShow={this.state.valToShow} />
          <Buttons
            digit={this.handleDigit}
            operator={this.handleOperator}
            decimal={this.handleDecimal}
            calculate={this.handleCalculate}
            reset={this.resetCalc}
          />
        </div>
      </Aux>
    );
  }
}

// FORMULA window
class Formula extends React.Component {
  render() {
    return <div id="show-formula">{this.props.formulaToShow}</div>;
  }
}

// RESULT windows
class Result extends React.Component {
  render() {
    return <div id="display">{this.props.valToShow}</div>;
  }
}

*/

export default app;
