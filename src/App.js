import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Calculator from "./Containers/Calculator/Calculator";

import "./App.css";

const app = props => {
  return (
    <>
      <CssBaseline />

      <Calculator />

    </>
  );
};

export default app;
