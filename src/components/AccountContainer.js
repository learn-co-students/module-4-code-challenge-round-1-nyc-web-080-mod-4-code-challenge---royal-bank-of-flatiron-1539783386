import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  // constructor() {
  //   super()

  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API

  // }

  state = {
    transactions: [],
    isLoaded: false,
    searchFilter: ""
  };
  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(response => response.json())
      .then(transData => {
        this.setState({
          transactions: transData,
          isLoaded: true
        });
      });
  }
  handleChange = obj => {
    this.setState({
      searchFilter: obj
    });
  };

  render() {
    if (!this.state.isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <Search
            handleChange={this.handleChange}
            searchFilter={this.state.searchFilter}
          />
          <TransactionsList
            transactions={this.state.transactions}
            handleChange={this.handleChange}
            searchFilter={this.state.searchFilter}
          />
        </div>
      );
    }
  }
}

export default AccountContainer;
