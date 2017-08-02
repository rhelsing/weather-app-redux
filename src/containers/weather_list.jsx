import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { fetchWeather } from '../actions/index'

class WeatherList extends Component {

  //loop through w/ map
  renderWeather(cityData) {
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
      </tr>
    )
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }

}


function mapStateToProps(state) {
  console.log("map", state.weather)
  return {weather: state.weather}
}

//equivalent to above ES6
// function mapStateToProps( weather ) {
//   console.log(weather)
//   return { weather }
// }

export default connect(mapStateToProps)(WeatherList)
