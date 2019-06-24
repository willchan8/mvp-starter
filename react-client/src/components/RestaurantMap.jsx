import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import IconMarker from './IconMarker.jsx';


const RestaurantMap = withScriptjs(withGoogleMap((props) => {

  const markers = props.restaurants.map( restaurant => 
    <IconMarker
      key={restaurant.id}
      restaurant={restaurant}
      location={{lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}}
    />
  );

  return (
    <div className="column-right">
      <GoogleMap
        defaultZoom={12}
        center={ { lat:  37.7757, lng: -122.4425 } }
        >
        {markers}
      </GoogleMap>
    </div>
    );
  }
))

export default RestaurantMap;