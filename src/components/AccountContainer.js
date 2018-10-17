import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

const API_ENDPOINT = "https://boiling-brook-94902.herokuapp.com/transactions"


class AccountContainer extends Component {

  state = {
    transactions: [ ],
    searchTerm: ""
  }


//fetch the data

  componentDidMount(){
    fetch(API_ENDPOINT)
    .then(r => r.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })



  }

//handle the search
  handleChange = (input) =>{
    this.setState({
      searchTerm: input
    })
  }

  render() {
    

    return (
      <div>
        <Search handleChange = {this.handleChange}/>
        <TransactionsList searchTerm = {this.state.searchTerm} transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
