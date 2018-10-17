import React from 'react'

const Search = (props) => {
  // onChange calls function defined in AccountContainer with the event passed down from props
  return (
    <div className="ui huge fluid icon input">
      <input
        onChange={(event) => props.handleChange(event)}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
