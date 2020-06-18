import React, { Component } from "react";


const postURL = 'http://localhost:6001/transactions'

class AddTransactionForm extends Component {

  constructor() {
    super()
    this.state={
      date: "",
      description: "",
      category: "",
      amount: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => { // this works, but it doesn't re-render
    event.preventDefault()
    console.log(this.state)

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    } 
    fetch(postURL, reqObj)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleChange} />
            <input type="text" name="description" placeholder="Description" onChange={this.handleChange}  />
            <input type="text" name="category" placeholder="Category" onChange={this.handleChange} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange} 
            />
          </div>
          <button className="ui button" type="submit" >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;


// 