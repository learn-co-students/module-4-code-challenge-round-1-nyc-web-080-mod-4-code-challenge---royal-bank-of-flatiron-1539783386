import React from 'react'

const Search = (props) => {

//send search to parent 
  const handleSearch = (event) => {
    props.handleChange(event.target.value)
  }


  return (
    <div className="ui huge fluid icon input">
      <input onChange = {handleSearch}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
