import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      allTransactions: transactions,
      searchText: "",
      showInfo: [],
      showInfo2: []
    }

  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions").then(response => response.json())
    .then(data => {
      this.setState({
        allTransactions: data
      })
    })
  }


  handleChange = (event) => {
    // this.setState({
    //   searchText: event.target.value
    // })
    const filtered = this.state.allTransactions.filter(trans => {
      return (trans.category === event.target.value)    
    })

    const filtered2 = this.state.allTransactions.filter(trans => {
      return (trans.description === event.target.value)
    })

    this.setState({showInfo: filtered, showInfo2: filtered2})
  }

  // filterInfo = () => {
  //   const filtered = this.state.allTransactions.filter(trans => {
  //     debugger
  //     return (trans.category === this.state.searchText)
  //   })
  //   console.log("filtered:", filtered);
  // }




  render() {
    console.log("allTransactions", this.state.allTransactions[0]);
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList showInfo={this.state.showInfo} showInfo2={this.state.showInfo2} />
      </div>
    )
  }
}

export default AccountContainer
