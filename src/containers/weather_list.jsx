import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

  //loop through w/ map
  renderWeather(cityData) {

    const ts = cityData.list.map(weather => (weather.main.temp*(9/5)-459.67))
    const hs = cityData.list.map(weather => weather.main.humidity)
    const ps = cityData.list.map(weather => weather.main.pressure)
    const { lon, lat } = cityData.city.coord //es6 grab stuff

    return (
      <tr key={cityData.city.id}>
        <td><h2>{cityData.city.name}</h2></td>
        <td><Chart data={ts} color="orange" units="F" /></td>
        <td><Chart data={ps} color="red" units="hPa" /></td>
        <td><Chart data={hs} color="blue" units="%" /></td>
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
