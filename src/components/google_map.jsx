import React, { Component } from 'react'

class GoogleMap extends Component {

  //create element then have maps render map

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    //this.refs.map - like jquery selector
    return <div ref="map" />
  }
}

export default GoogleMap
