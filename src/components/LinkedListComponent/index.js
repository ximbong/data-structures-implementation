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

  handleData = (e, action) => {
    this.setState({
      [`${action}Value`]: e.target.value
    });
  };

  handleDelete = e => {
    e.preventDefault();
  };

  handleSearch = (e, searchValue) => {
    e.preventDefault();

    this.setState({
      searchResult: linkedlist.search(searchValue)
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

  render() {
    const { count, searchResult, deleteValue, searchValue } = this.state;

    const size = linkedlist.size();

    const resultRow =
      searchResult !== "" && //if searchResult is not empty
      (!searchResult ? ( //if searchResult is undefined
        <Row className="details">No result found.</Row>
      ) : (
        <Row className="details">
          Result found. Next node:{" "}
          {!searchResult.next ? "null" : searchResult.next.value.index}
        </Row>
      ));

    const ItemList = [...linkedlist.print()].map((e, i) => {
      return <Item index={e.index} key={i} />;
    });

    return (
      <Col xs={4} className="text-center col-space">
        <h1>Linked List</h1>
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
            Add to front
          </Button>
          <form
            onSubmit={e => {
              this.handleDelete(e);
              linkedlist.delete(parseInt(deleteValue, 10));
              this.updateLinkedList(linkedlist);
            }}
          >
            <FormControl
              type="text"
              onChange={e => this.handleData(e, "delete")}
              placeholder="Delete value"
              value={deleteValue}
            />
          </form>
          <form
            onSubmit={e => {
              this.handleSearch(e, parseInt(searchValue, 10));
            }}
          >
            <FormControl
              type="text"
              onChange={e => this.handleData(e, "search")}
              placeholder="Search value"
              value={searchValue}
            />
          </form>
        </Row>
        <Row className="details">
          There is {size} item(s) in the linked list.
        </Row>
        {resultRow}
        <Row>{ItemList}</Row>
      </Col>
    );
  }
}

export default LinkedListComponent;
