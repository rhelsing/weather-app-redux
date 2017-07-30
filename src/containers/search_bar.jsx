import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this) //either this or fat arrow
    this.onFormSubmit = this.onFormSubmit.bind(this) //dont need this?
  }

  onInputChange(e){
    this.setState({term: e.target.value})
  }

  onFormSubmit(e){
    e.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
    //fetch weather
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)//not caring about state up from
