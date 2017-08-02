import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {

  //loop through w/ map
  renderWeather(cityData) {

    const ts = cityData.list.map(weather => weather.main.temp)
    const hs = cityData.list.map(weather => weather.main.humidity)
    const ps = cityData.list.map(weather => weather.main.pressure)

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>{this.renderChartCol(ts)}</td>
        <td>{this.renderChartCol(hs)}</td>
        <td>{this.renderChartCol(ps)}</td>
      </tr>
    )
  }

  renderChartCol(chartData){
    console.log(chartData)
    return (
      <Sparklines height={120} width={180} data={chartData}>
        <SparklinesLine color='red' />
      </Sparklines>
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
