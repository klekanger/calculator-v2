import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';
import Calculator from "./Containers/Calculator/Calculator";

import "./App.css";

const app = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      
        <Calculator />
      
    </React.Fragment>
  );
};

export default app;
