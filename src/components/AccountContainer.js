import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchInput: ''
  }

  // Deliverable #1 - Step #1 - fetch the data from API ('https://boiling-brook-94902.herokuapp.com/transactions')
  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(response => response.json())
    .then(transactionData => {
      // console.log(transactionData) -> verified fetch
      // Deliverable #1 - Step #2 - set the state of transactions equal to the fetched data
      this.setState({
        transactions: transactionData
      })
    })
  }

  // Deliverable #2 - Pass this event down to the SearchBar
  handleSearchChange = (input) => {
    this.setState({searchInput: input})
  }



// Deliverable #1 - Step #3 - Pass the state down to <TransactionsList /> as props
  render() {
    console.log("this is the state after", this.state.searchInput);
    return (
      <div>
        <Search handleSearchChange={this.handleSearchChange}/>
        <TransactionsList
          transactions={this.state.transactions}
          searchInput={this.state.searchInput}
        />
      </div>
    )
  }
}

export default AccountContainer
