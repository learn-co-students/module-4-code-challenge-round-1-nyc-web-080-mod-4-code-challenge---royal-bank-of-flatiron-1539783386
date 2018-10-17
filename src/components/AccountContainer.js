import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      allTransactions: transactions,
      filteredTransactions: transactions,
      searchBy: ""
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(res => res.json())
      .then(data => this.setState({allTransactions:data,filterTransactions:data}))
  }

  handleChange = (event) => {
    this.setState({
      searchBy: event.target.value
    })
    this.filterTransactions(event.target.value)
  }

  filterTransactions = (filterBy) => {
    const filteredTransactions = this.state.allTransactions.filter(transaction => {
      return transaction.category.toLowerCase().includes(filterBy) || transaction.description.toLowerCase().includes(filterBy)
    })

    this.setState({
      filteredTransactions: filteredTransactions
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
