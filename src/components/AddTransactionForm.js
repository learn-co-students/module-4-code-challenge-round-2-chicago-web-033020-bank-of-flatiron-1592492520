import React, { Component } from "react"

const transactionsAPI = 'http://localhost:6001/transactions'

class AddTransactionForm extends Component {

  handleChange = (e) => {
    this.setState({
        [ e.target.name ]: e.target.value
    })
    console.log(e.target.name, e.target.value)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={ () => { this.props.handleSubmit(this.props.transaction) } } className="ui form">
          <div className="inline fields">
            <input onChange={ this.handleChange } type="date" name="date" />
            <input onChange={ this.handleChange } type="text" name="description" placeholder="Description" />
            <input onChange={ this.handleChange } type="text" name="category" placeholder="Category" />
            <input
              onChange={ this.handleChange }
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
