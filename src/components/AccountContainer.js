import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

    state = {
      transactions:[],
      search:""
    }

componentDidMount(){
  fetch('https://boiling-brook-94902.herokuapp.com/transactions')
  .then(r => r.json())
  .then(transactions => this.setState({transactions}))
}

  doChange = (event)=> {
    this.setState({search: event.target.value}), this.showTransaction()
  }

  showTransaction = () =>{
     var debits = this.state.transactions
     console.log(debits)
    return debits.filter(accountObj => {
       return accountObj.description.toLowerCase().includes(this.state.search.toLowerCase())})
     }





  render() {
    return (
      <div>
        <Search doChange={this.doChange}
        search={this.state.search}
        />
        <TransactionsList  transactions={this.showTransaction()}
        />
      </div>
    )
  }
}

export default AccountContainer
