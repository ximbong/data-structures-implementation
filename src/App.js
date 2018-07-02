import React, { Component } from "react";
import { Grid } from "react-bootstrap";

import StackComponent from "./components/StackComponent";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Grid>
        <StackComponent />
      </Grid>
    );
  }
}

export default App;
