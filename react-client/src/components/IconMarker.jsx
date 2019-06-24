import React from "react";
import { Marker } from "react-google-maps";
import bobaicon from "./bobaicon.png";

class IconMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.restaurant.visited === false) {
      return (
          <Marker
            position={this.props.location}
            icon={{
              url: bobaicon,
              scaledSize: new google.maps.Size(45, 45)
            }}
          >
          </Marker>
      );
    } else {
      return (
        <Marker
          position={this.props.location}
        >
        </Marker>
      )}
  }
}

export default IconMarker;