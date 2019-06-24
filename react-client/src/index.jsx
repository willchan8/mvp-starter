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
      count: 0,
      notVisited: []
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
      this.setState({
        visited: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  clickVisited(restaurant) {
    const restaurantsCopy = this.state.restaurants.slice();
    for (let i = 0; i < restaurantsCopy.length; i++) {
      if (restaurantsCopy[i].id === restaurant.id) {
        restaurantsCopy[i].visited = !restaurantsCopy[i].visited;
        if (restaurantsCopy[i].visited === true) {
          this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        } else {
          this.setState((prevState) => ({
            count: prevState.count - 1
        }))
        }
        break;
      }
    }

    this.setState({restaurants: restaurantsCopy});

    axios.post('/restaurants/user', restaurant)
    .then(this.updateVisited)
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { restaurants, visited, count } = this.state;
    return (
      <div>
        <div className="top-row">
          <div className="header center">Boba Buddy</div>
          <div className="sentence center">
            You've been to <span className="visits">{ count } out of { restaurants.length } ({ ((count/restaurants.length) * 100).toFixed(1) }%)</span> of boba spots in San Francisco.
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