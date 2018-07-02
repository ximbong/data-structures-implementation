import React, { Component } from "react";
import { Row, Col, Button, ButtonToolbar } from "react-bootstrap";

import Stack from "../../data-structures/stack";
import Item from "../../components/Item";

const stack = new Stack();

class StackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  updateStack = stack => {
    this.setState({
      data: stack.print()
    });
  };

  render() {
    const ItemList = [...stack.print()].map((e, i) => {
      return <Item index={i} key={i} />;
    });

    return (
      <Col xs={12} md={4} className="text-center">
        <Row>
          <Button
            bsStyle="success"
            onClick={() => {
              stack.push("1");
              this.updateStack(stack);
            }}
          >
            Push
          </Button>
          <Button
            bsStyle="warning"
            onClick={() => {
              stack.pop();
              this.updateStack(stack);
            }}
          >
            Pop
          </Button>
          <Button
            bsStyle="danger"
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
