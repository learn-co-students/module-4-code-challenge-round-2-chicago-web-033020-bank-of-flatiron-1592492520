import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const transactionsAPI = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      filtered: []
    }
  }

  componentDidMount() {
    fetch(transactionsAPI)
      .then(resp => resp.json())
      .then(transactionJSON => {
        this.setState({
          transactions: transactionJSON,
          filtered: this.props.items
        })
      })
  }


componentWillReceiveProps(nextProps) {
  this.setState({
    filtered: nextProps.transactions
  });
}


  handleSubmit = (event) => {
    event.preventDefault()
    const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({...this.state})
    }
    
    fetch(transactionsAPI, reqObj)
        .then(resp => resp.json()) 
        .then(newTransaction =>{ 
          this.setState({
            transactions: [...this.state, newTransaction]
          })
        })
        
      // Handle submit seems to not be giving any errors, but it isn't posting properly.
  }

  handleChange = (e) => {
    this.setState({
        [ e.target.name ]: e.target.value
    })
    console.log(e.target.name, e.target.value)
  }
  
  deleteTransaction = (transaction) => {
    const filteredTransactions = this.state.transactions.filter(transactionObj => {
      return transactionObj.id !== transaction.id
    })
      this.setState({
        transactions: filteredTransactions
      })

    const configObj = { method: 'DELETE' }

    fetch(`${transactionsAPI}/${transaction.id}`, configObj)
    // Managed to add a delete to make up for the part i could not do in the baseline, it fully works
  }


  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm handleSubmit={ this.handleSubmit } />
        <TransactionsList transactions={ this.state.transactions } deleteTransaction={ this.deleteTransaction } />
      </div>
    );
  }
}

export default AccountContainer;
