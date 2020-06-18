import React from "react";

class Search extends React.Component {

  handleChange = (e) => {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
    currentList = this.props.transactions;
    newList = currentList.filter(transaction => {
      const lc = transaction.toLowerCase();
      const filter = e.target.value.toLowerCase();
      return lc.includes(filter);
    });
    } else {
     newList = this.props.transactions;
    }
    this.setState({
      filtered: newList
    });
    // Tried to figure out on the spot how to handle a search, throws an error
  }

  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={ this.handleChange }
        />
        <i className="circular search link icon"></i>
      </div>
    );
  }
};

export default Search;
