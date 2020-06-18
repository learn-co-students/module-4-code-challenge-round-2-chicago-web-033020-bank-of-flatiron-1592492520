import React from "react";


const Search = (props) => {
  

  // console.log(props)
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(event) => {
          props.onSearch(event.target.value);
        }}
        onSubmit={(event) => props.onSearch(event.target.value)}
      />
      <i className="circular search link icon" ></i>
    </div>
  );
};

export default Search;

// onSubmit={props.onSubmit()}