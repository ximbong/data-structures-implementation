import React, { Component } from "react";
import { Row, Col, Button, ButtonToolbar } from "react-bootstrap";

import Stack from "../../data-structures/stack";
import Item from "../../components/Item";

const stack = new Stack();

class StackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 0
    };
  }

  updateStack = stack => {
    this.setState({
      data: stack.print()
    });
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const count = this.state.count;

    const ItemList = [...stack.print()].map((e, i) => {
      return <Item index={e.index} key={i} />;
    });

    return (
      <Col xs={12} md={4} className="text-center col-space">
        <Row className="buttonDiv">
          <Button
            bsStyle="success"
            className="btn-block"
            onClick={() => {
              stack.push({ index: count });
              this.increaseCount();
              this.updateStack(stack);
            }}
          >
            Push
          </Button>
          <Button
            bsStyle="warning"
            className="btn-block"
            onClick={() => {
              stack.pop();
              this.updateStack(stack);
            }}
          >
            Pop
          </Button>
          <Button
            bsStyle="danger"
            className="btn-block"
            onClick={() => {
              stack.stackEmpty();
              this.updateStack(stack);
            }}
          >
            Empty
          </Button>
        </Row>
        <Row>{ItemList}</Row>
      </Col>
    );
  }
}

export default StackComponent;
