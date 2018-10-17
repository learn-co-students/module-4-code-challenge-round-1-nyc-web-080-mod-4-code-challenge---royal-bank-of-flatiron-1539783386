import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

   state={
     data:null,
     searchTerm:''
   }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res=>res.json())
    .then(data=>this.setState({data}))
  }

  handleChange=(event)=> {
    this.setState({searchTerm:event.target.value.toLowerCase()})
  }

  render() {
    const renderList=this.state.data?this.state.data.filter(data=>data.description.toLowerCase().includes(this.state.searchTerm)):null
    return (
      <div>
        <Search handleChange={this.handleChange} term={this.state.searchTerm}/>
        <TransactionsList data={renderList}/>
      </div>
    )
  }
}

export default AccountContainer
