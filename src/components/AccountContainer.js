import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search handleFilter={this.props.handleFilter}/>
        <AddTransactionForm handleSubmit={this.props.handleSubmit}/>
        <TransactionsList transactions={this.props.transactions} handleDelete={this.props.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
