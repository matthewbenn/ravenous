import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import '../components/SearchBar/SearchBar.js'
import '../components/BusinessList/BusinessList.js';
import '../components/Business/Business.js'

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar />
          <BusinessList />
      </div>
    );
  }
}

export default App;
