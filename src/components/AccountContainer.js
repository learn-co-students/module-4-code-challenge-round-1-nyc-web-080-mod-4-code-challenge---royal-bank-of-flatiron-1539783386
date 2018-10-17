import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: transactions,
      searchTerm: ""
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }
  
  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(r => r.json())
    .then(transactions => {
      this.setState({transactions})
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value.toLowerCase()
    })
  }

  render() {

    const transactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchTerm) || transaction.category.toLowerCase().includes(this.state.searchTerm))

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={transactions}/>
      </div>
    )
  }
}

export default AccountContainer
