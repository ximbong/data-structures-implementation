import React, { Component } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";

import LinkedList from "../../data-structures/linkedlist";
import Item from "../../components/Item";

import "./index.css";

const linkedlist = new LinkedList();

class LinkedListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count: 0,
      deleteValue: "",
      searchValue: "",
      searchResult: ""
    };
  }

  handle = (e, action) => {
    this.setState({
      [`${action}Value`]: e.target.value
    });
  };

  updateLinkedList = linkedlist => {
    this.setState({
      data: linkedlist.print()
    });
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDelete = e => {
    e.preventDefault();
  };

  handleSearch = e => {
    e.preventDefault();
  };

  render() {
    const count = this.state.count;
    const deleteValue = parseInt(this.state.deleteValue);
    const searchValue = parseInt(this.state.searchValue);
    console.log(this.state.data);

    const ItemList = [...linkedlist.print()].map((e, i) => {
      return <Item index={e.index} key={i} />;
    });

    return (
      <Col xs={12} md={4} className="text-center col-space">
        <Row className="buttonDiv">
          <Button
            bsStyle="success"
            className="btn-block"
            onClick={() => {
              linkedlist.insert({ index: count });
              this.increaseCount();
              this.updateLinkedList(linkedlist);
            }}
          >
            Insert
          </Button>
          <form
            onSubmit={e => {
              this.handleDelete(e);
              linkedlist.delete(deleteValue);
              this.updateLinkedList(linkedlist);
            }}
          >
            <FormControl
              type="text"
              onChange={e => this.handle(e, "delete")}
              placeholder="Delete value"
              value={this.state.deleteValue}
            />
          </form>
          <form
            onSubmit={e => {
              this.handleSearch(e);
              linkedlist.search(searchValue);
            }}
          >
            <FormControl
              type="text"
              onChange={e => this.handle(e, "search")}
              placeholder="Search value"
              value={this.state.searchValue}
            />
          </form>
        </Row>
        <Row>{ItemList}</Row>
      </Col>
    );
  }
}

export default LinkedListComponent;
