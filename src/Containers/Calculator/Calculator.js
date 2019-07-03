import React from "react";
import Aux from "../../hoc/Aux";
import Buttons from "../../Components/Buttons/Buttons";
import FormulaBar from "../../Components/FormulaBar/FormulaBar";
import "./Calculator.css";

const calculator = props => {

    return (
      <Aux>
        <div className="container">
          <FormulaBar />
          <Buttons />
        </div>
      </Aux>
    );

}

export default calculator;
