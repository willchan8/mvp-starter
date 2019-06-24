import React from "react";
import RestaurantMap from "./RestaurantMap.jsx";
import { MAPS_API_KEY } from './apiKeys';

class MapContainer extends React.Component {

	render() {
    const { restaurants } = this.props;
		return (
      <div className="map">
        <RestaurantMap
          restaurants={restaurants}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `550px`, width: `550px`, margin: `0 auto` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
		);
	}
}

export default MapContainer;