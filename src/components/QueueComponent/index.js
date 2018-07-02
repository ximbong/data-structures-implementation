import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

import Queue from "../../data-structures/queue";
import Item from "../../components/Item";

const queue = new Queue();

class QueueComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 0
    };
  }

  updateQueue = queue => {
    this.setState({
      data: queue.print()
    });
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const count = this.state.count;
    const size = queue.size();

    const ItemList = [...queue.print()].map((e, i) => {
      return <Item index={e.index} key={i} />;
    });

    return (
      <Col xs={4} className="text-center col-space">
        <Row className="buttonDiv">
          <Button
            bsStyle="success"
            className="btn-block"
            onClick={() => {
              queue.enQueue({ index: count });
              this.increaseCount();
              this.updateQueue(queue);
            }}
          >
            Enqueue
          </Button>
          <Button
            bsStyle="warning"
            className="btn-block"
            onClick={() => {
              queue.deQueue();
              this.updateQueue(queue);
            }}
          >
            Dequeue
          </Button>
          <Button
            bsStyle="danger"
            className="btn-block"
            onClick={() => {
              queue.queueEmpty();
              this.updateQueue(queue);
            }}
          >
            Empty
          </Button>
        </Row>
        <Row className="details">There is {size} item(s) in the queue.</Row>
        <Row>{ItemList}</Row>
      </Col>
    );
  }
}

export default QueueComponent;
