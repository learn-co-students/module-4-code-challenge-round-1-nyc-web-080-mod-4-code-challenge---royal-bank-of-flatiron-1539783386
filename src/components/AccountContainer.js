import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'


class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: ""
    }


  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  display = () => {
    const returnArray = this.props.transactions.filter((tran) => {
      return tran.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || tran.category.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return returnArray
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.display()} />
      </div>
    )
  }
}

export default AccountContainer
