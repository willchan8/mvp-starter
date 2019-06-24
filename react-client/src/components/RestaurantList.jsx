import React from 'react';
import RestaurantItem from './RestaurantItem.jsx';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    const { visited } = this.state;
    const { restaurants, clickVisited } = this.props;
    return (
      <div className="column-left">
        <div className="locations"> Locations </div>
        <div className="restaurant-list">
          { restaurants.map(restaurant => <RestaurantItem key={restaurant.id} restaurant={restaurant} clickVisited={clickVisited}/>)}
        </div>
      </div>
    )
  }
}

export default RestaurantList;