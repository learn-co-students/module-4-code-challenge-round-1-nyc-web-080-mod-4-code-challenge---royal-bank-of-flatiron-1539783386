import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allTransactions: [],
      searchInput: "",
      filterTransaction: []
    }
  }

  componentDidMount = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => this.setState({
      allTransactions:data
    }))
  }

  handleChange = (input) => {
    this.setState({
      searchInput: input,
      filterTransaction: [...this.state.allTransactions].filter(transaction => transaction.description.toLowerCase().includes(this.state.searchInput.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.searchInput.toLowerCase()))
    })
  }

  render() {
    return (
      <div>
        <Search searchInput={this.state.searchInput} handleChange={this.handleChange}/>
        <TransactionsList searchInput={this.state.searchInput} allTransactions={this.state.allTransactions} filterTransaction={this.state.filterTransaction}/>
      </div>
    )
  }
}

export default AccountContainer
