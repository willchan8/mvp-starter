import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import RestaurantList from './components/RestaurantList.jsx';
import MapContainer from './components/MapContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      restaurants: [],
      visitedRestaurants: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/restaurants', 
      success: (data) => {
        this.setState({
          restaurants: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    const {restaurants} = this.state;
    return (
      <div>
        <h1 className="header">Boba Buddy</h1>
        <div className="row">
          <div className="column">
            <MapContainer restaurants={restaurants}/>
          </div>
          <div className="column">
            <RestaurantList restaurants={restaurants}/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));