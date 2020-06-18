import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import TransactionsList from './TransactionsList'
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: []
  }

  componentDidMount = () => {
    fetch('http://localhost:6001/transactions/')
    .then((res) => res.json())
    .then((transactionsJSON) => {
      this.setState({
        transactions: transactionsJSON
      })
    })
  }

  handleSubmit = (inputData) => {
    fetch('http://localhost:6001/transactions/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(inputData)
    })
    .then((res) => res.json())
    .then((dataJSON) => {
      const updatedTransactions = [...this.state.transactions, dataJSON]
      this.setState({
        transactions: updatedTransactions
      })
    })
  }

  handleDelete = (selectedTransaction) => {
    fetch('http://localhost:6001/transactions/' + selectedTransaction.transaction.id, {method: 'DELETE'})
    const newTransactions = this.state.transactions.filter(transaction => transaction.id !== selectedTransaction.transaction.id)
    this.setState({
      transactions: newTransactions
    })
    // console.log(selectedTransaction.transaction.id)
  }

  handleFilter = (filterData) => {
    // console.log(filterData)
    const filteredTrans = this.state.transactions.filter(transaction => transaction.description.includes(filterData))
    this.setState({
      transactions: filteredTrans
    })
  }

  render() {
    console.log(this.state.transactions)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
        transactions={this.state.transactions} 
        handleSubmit={this.handleSubmit} 
        handleDelete={this.handleDelete}
        handleFilter={this.handleFilter}/>
      </div>
    );
  }
}

export default App;
