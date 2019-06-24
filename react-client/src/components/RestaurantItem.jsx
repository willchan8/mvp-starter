import React from 'react';

const RestaurantItem = (props) => (
  <div className="restaurant">
    <img className="picture" src={props.restaurant.image_url} alt=""/>
    <span className="restaurant-name">{ props.restaurant.name }</span>
    <button onClick={() => {props.clickVisited(props.restaurant)}}>Visited</button>
  </div>
)

export default RestaurantItem;