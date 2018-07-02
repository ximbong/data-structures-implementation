import React, { Component } from "react";
import { Grid } from "react-bootstrap";

import StackComponent from "./components/StackComponent";
import QueueComponent from "./components/QueueComponent";
import LinkedListComponent from "./components/LinkedListComponent";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Grid>
        <StackComponent />
        <QueueComponent />
        <LinkedListComponent />
      </Grid>
    );
  }
}

export default App;
