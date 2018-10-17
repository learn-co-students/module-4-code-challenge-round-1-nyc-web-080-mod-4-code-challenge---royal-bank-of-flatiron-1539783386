import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filterTransactions: [],
      searchingBy: ""
    }
  }

  handleChange = (input) => {
    let allTransactions = [...this.props.transactions]
    let targetTransactions = allTransactions.filter(transaction => {
      return transaction.description.toLowerCase().startsWith(input.toLowerCase()) ||
      transaction.category.toLowerCase().startsWith(input.toLowerCase())
    })

    this.setState({
      searchingBy: input,
      filterTransactions: targetTransactions
    })
  }

  render() {
    return (
      <div>
        <Search searchItem={this.handleChange}/>
        <TransactionsList transactions={this.state.searchingBy === "" ? this.props.transactions : this.state.filterTransactions}  />
      </div>
    )
  }
}

export default AccountContainer
