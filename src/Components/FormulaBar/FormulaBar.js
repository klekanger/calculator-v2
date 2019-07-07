import React from "react";
import Aux from "../../hoc/Aux";

const Formulabar = props => {
  return (
    <Aux>
      <div id="formula">
        {!props.fullFormula ? "N/A" : props.fullFormula}
        <br />
      </div>
      <div id="display">{props.valueToShow}</div>
    </Aux>
  );
};

export default Formulabar;
