import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/List.jsx';
import Map from './components/Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (
      <div>
        <h1 className='header'>Item List</h1>
        <List items={this.state.items}/>
        <Map />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));