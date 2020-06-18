import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const getURL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      filtered: []
    }
  }

  componentDidMount(){
    fetch(getURL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }

  onSearch = (description) => {
    console.log(description)
    const transaction = this.state.transactions.filter(trans => {
     return trans.description.includes(description)
    })
    console.log(transaction)
    this.setState({
      transactions: transaction
     })
  }



  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search onSearch={this.onSearch} transactions={this.state.transactions}/>
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
