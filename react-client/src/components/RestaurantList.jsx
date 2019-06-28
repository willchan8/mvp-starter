import React from 'react';
import RestaurantItem from './RestaurantItem.jsx';
import Pagination from './Pagination.jsx';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      restaurantsPerPage: 20
    }
    this.paginate = this.paginate.bind(this);
  }

  paginate(pageNumber) {
    console.log(pageNumber);
    this.setState({currentPage: pageNumber}); 
  }

  render () {
    const { restaurants, clickVisited } = this.props;
    const { currentPage, restaurantsPerPage } = this.state;

    const indexOfLastRestaurant = currentPage * restaurantsPerPage;
    const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
    const currentRestaurants = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

    return (
      <div className="column-left">
        <div className="locations"> Locations </div>
        <div className="restaurant-list">
          { currentRestaurants.map(restaurant => 
            <RestaurantItem 
              key={restaurant.id} 
              restaurant={restaurant} 
              clickVisited={clickVisited}
            />)
          }
        </div>
        <Pagination 
          restaurantsPerPage={restaurantsPerPage} 
          totalRestaurants={restaurants.length} 
          paginate={this.paginate}
        />
      </div>
    )
  }
}

export default RestaurantList;