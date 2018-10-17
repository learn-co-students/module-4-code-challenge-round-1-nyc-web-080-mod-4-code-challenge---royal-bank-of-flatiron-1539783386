import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: ''
  }

  handleChange = (event) => {
    const searchTerm = event.target.value
    this.setState({ searchTerm })
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then( res => res.json() )
    .then( transactions => this.setState( { transactions } ))
  }

  transactionsToShow = () => {
    const searchTerm = this.state.searchTerm.toLowerCase()
    return this.state.transactions.filter( transaction => {
      return transaction.description.toLowerCase().includes(searchTerm) || transaction.category.toLowerCase().includes(searchTerm)
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
        <TransactionsList transactions={this.transactionsToShow()} />
      </div>
    )
  }
}

export default AccountContainer
