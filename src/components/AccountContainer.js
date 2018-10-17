import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // Default both transactions to imported data
    this.state = {
      transactions: transactions,
      filteredTransactions: transactions
    }

  }

  // Fetch data from API
  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(tData => {
      this.setState({
        transactions: tData,
        filteredTransactions: tData
      })
    })
  }

  // Function to handle filtering of data given input
  handleSearch = (value) => {
    const filteredTransactions = this.state.transactions.filter(transaction => {
      const desc = transaction.description.toLowerCase()
      const category = transaction.category.toLowerCase()
      return desc.includes(value.toLowerCase()) || category.includes(value.toLowerCase())
    })

    // Set filtered transactions state to new filtered data
    this.setState({
      filteredTransactions
    })
  }

  // Search form change handler
  handleChange = (event) => {
    this.handleSearch(event.target.value)
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
