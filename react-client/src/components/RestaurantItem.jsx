import React from 'react';

    class RestaurantItem extends React.Component {
      constructor(props) {
        super(props);
      }
    
      render() {
        const visitText = this.props.restaurant.visited ? 'Visited' : 'Check In';
        return (
          <div className="restaurant">
          <img className="picture" src={this.props.restaurant.image_url} alt=""/>
          <div className="restaurant-info">
            <div className="restaurant-name">{ this.props.restaurant.name }</div>
            <div className="rating">Rating: { this.props.restaurant.rating } / 5 ({this.props.restaurant.review_count} Reviews)</div>
            <div className="phone">{ this.props.restaurant.display_phone }</div>
            <div className="address">{ this.props.restaurant.location.address1 }</div>
            <button className="visit-button" onClick={() => {this.props.clickVisited(this.props.restaurant)}}>{visitText}</button>
          </div>
        </div>
        );
      }
    }


// const RestaurantItem = (props) => (
//   <div className="restaurant">
//     <img className="picture" src={props.restaurant.image_url} alt=""/>
//     <div className="restaurant-info">
//       <div className="restaurant-name">{ props.restaurant.name }</div>
//       <div className="rating">Rating: { props.restaurant.rating } / 5 ({props.restaurant.review_count} Reviews)</div>
//       <div className="phone">{ props.restaurant.display_phone }</div>
//       <div className="address">{ props.restaurant.location.address1 }</div>
//       <button className="visit-button" onClick={() => {props.clickVisited(props.restaurant)}}>Visited</button>
//     </div>
//   </div>
// )

export default RestaurantItem;