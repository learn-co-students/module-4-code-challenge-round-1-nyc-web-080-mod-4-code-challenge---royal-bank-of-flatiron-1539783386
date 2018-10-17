import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions:[], // transactions
      filteredTransactions:[], // transactions
      searchTerms:''
    }
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactionsArray => {
      this.setState({
        transactions:transactionsArray,
        filteredTransactions:transactionsArray
      })
    })
  }




  // collects the string that the user types into the searchfield & updates the filteredTransaction with transactions
  // if that string can be located in either the category or description for any particular transaction
  handleChange = (event) => {
    this.setState({searchTerms:event.target.value})
    // console.log(this.state.filteredTransactions)
    const filteredArray = []

    // changed .map to .forEach to remove warning message about the function having a callback.
    // https://stackoverflow.com/questions/48163744/expected-to-return-a-value-in-arrow-function-array-callback-return-why/48163905
    this.state.transactions.forEach(transaction => {
      if(transaction.description.toLowerCase().includes(event.target.value.toLowerCase())
      || transaction.category.toLowerCase().includes(event.target.value.toLowerCase())){
        filteredArray.push(transaction)
      }
    })
    this.setState({filteredTransactions:filteredArray})
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
