import React from 'react'

const Search = (props) => {
  return (
    <div onChange={props.handleChange} className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
