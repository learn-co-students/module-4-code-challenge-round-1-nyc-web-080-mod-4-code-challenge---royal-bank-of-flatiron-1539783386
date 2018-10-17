import React from "react";

const Search = props => {
  // console.log(props);
  const onChange = event => {
    props.handleChange(event.target.value);
  };

  return (
    <div className="ui huge fluid icon input">
      <input
        onChange={onChange}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon" />
    </div>
  );
};

export default Search;
