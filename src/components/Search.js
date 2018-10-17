import React, { Component } from 'react'

class Search extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props);
  }
  state = {
    input: ' '
  }

  // Deliverable #2 - Create a Search Bar
  // Deliverable #2 - Step 1 - log the event.target.value to confirm the onChange event handler is working
  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({input: event.target.value}),
    (event) => this.props.handleSearchChange(this.state.input)
  }

  render(){
    console.log("this is the state after", this.state.input);
  return (
    <div className="ui huge fluid icon input">
      <input
        onChange={this.onSearchChange}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
    }
}

export default Search
