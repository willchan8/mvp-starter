import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { MAPS_API_KEY } from './apiKeys';
 
const mapStyles = {
  width: '50%',
  height: '50%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: [
        {latitude: 47.359423, longitude: -122.021071},
        {latitude: 47.2052192, longitude: -121.9884262},
        {latitude: 47.6307081, longitude: -122.1434325},
        {latitude: 47.3084488, longitude: -122.2140121},
        {latitude: 47.5524695, longitude: -122.0425407}
      ]
    }
    this.displayMarkers = this.displayMarkers.bind(this);
  }

  displayMarkers () {
    return this.state.store.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194}}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: `${MAPS_API_KEY}`
})(MapContainer);