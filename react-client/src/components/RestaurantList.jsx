import React from 'react';
import RestaurantItem from './RestaurantItem.jsx';

const RestaurantList = (props) => (
  <div className="column-right">
  <h2> Locations </h2>
    <div>
      You've been to { props.restaurants.length } / { props.restaurants.length } (100%) of bubble tea spots in San Francisco.
    </div>
    <div className="restaurant-list">
      { props.restaurants.map(restaurant => <RestaurantItem key={restaurant.id} restaurant={restaurant}/>)}
    </div>
  </div>
)

export default RestaurantList;