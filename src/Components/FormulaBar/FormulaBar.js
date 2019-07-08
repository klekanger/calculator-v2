import React from "react";

const Formulabar = props => {
  return (
    <div>
      <div id="formula">
        {!props.fullFormula ? "N/A" : props.fullFormula}
        <br />
      </div>
      <div id="display">{props.valueToShow}</div>
    </div>
  );
};

export default Formulabar;
