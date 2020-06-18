import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
// import TransactionsList from './TransactionsList'

class App extends Component {
  
  state = {
    transactions: []
  }

  handleChange=() => {

    //I need to make a handlechange event listener that updates the value of the event target
    //I have to grab the values and create a transaction object out of them onSubmit
    //I have to append this object to an updated list of transactions and then set the state transactions to equal that list
    //I have to make a fetch request posting to the backend as well, I think
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(data => this.setState({
      transactions: data
    }))
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer allTransactions={this.state.transactions}/>

      </div>
    );
  }
}

export default App;
