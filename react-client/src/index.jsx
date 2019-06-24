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
      visited: [],
    }

    this.getRestaurants = this.getRestaurants.bind(this);
    this.updateVisited = this.updateVisited.bind(this);
    this.clickVisited = this.clickVisited.bind(this);
  }

  componentDidMount() {
    this.getRestaurants();
    this.updateVisited();
  }

  getRestaurants() {
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

  updateVisited() {
    axios.get('/restaurants/user')
    .then((response) => {
      console.log(response.data);
      console.log("GOT SAVED DATA");
      this.setState({visited: response.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  clickVisited(restaurant) {
    axios.post('/restaurants/user', restaurant)
    .then(this.updateVisited)
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { restaurants, visited } = this.state;
    return (
      <div>
        <div className="top-row">
          <div className="header center">Boba Buddy</div>
          <div className="visits center">
            You've been to { visited.length } out of { restaurants.length } ({ ((visited.length/restaurants.length) * 100).toFixed(1) }%) of boba spots in San Francisco.
          </div>
        </div>
        
        <div className="bottom-row">
          <div className="column">
            <RestaurantList restaurants={restaurants} visited={visited} clickVisited={this.clickVisited}/>
          </div>
          <div className="column">
            <MapContainer restaurants={restaurants} visited={visited}/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));