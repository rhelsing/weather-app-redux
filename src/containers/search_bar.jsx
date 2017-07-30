import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this) //either this or fat arrow
    // this.onFormSubmit = this.onFormSubmit.bind(this) //dont need this?
  }

  onInputChange(e){
    this.setState({term: e.target.value})
  }

  onFormSubmit(e){
    e.preventDefault()
  }

  render (){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search city to get 5 day forcast"
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn">
            Search
          </button>
        </span>
      </form>
      )
  }
}
