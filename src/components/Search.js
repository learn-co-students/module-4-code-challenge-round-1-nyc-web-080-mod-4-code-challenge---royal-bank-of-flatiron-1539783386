import React from 'react'

const Search = ({handleChange, searchInput}) => {

  const handleInput = (e) => {
    handleChange(e.target.value)
  }

  return (
    <div className="ui huge fluid icon input">
      <input onChange={handleInput} value={searchInput}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
