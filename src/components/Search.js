import React, { Component } from 'react';

class Search extends Component {

  handleOnChange = (event) => {
    this.props.searchItem(event.target.value)
  }

  render(){
    return (
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={this.handleOnChange}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search
