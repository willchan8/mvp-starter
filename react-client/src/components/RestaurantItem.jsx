import React from 'react';

const RestaurantItem = (props) => (
  <div className="restaurant">
    <img className="picture" src={props.restaurant.image_url} alt=""/>
    <div className="restaurant-info">
      <div className="restaurant-name">{ props.restaurant.name }</div>
      <div className="rating">Rating: { props.restaurant.rating } / 5 ({props.restaurant.review_count} Reviews)</div>
      <div className="phone">{ props.restaurant.display_phone }</div>
      <div className="address">{ props.restaurant.location.address1 }</div>
      <button className="visit-button" onClick={() => {props.clickVisited(props.restaurant)}}>Visited</button>
    </div>
  </div>
)

export default RestaurantItem;