import React from "react";
import { Marker } from "react-google-maps";
// import StethoscopeIcon from "../stethoscopeIcon.png";

class IconMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          // icon={StethoscopeIcon}
        >
        </Marker>
    );
  }
}

export default IconMarker;