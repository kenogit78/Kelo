import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import { getHotels } from './components/api';
// import { searchHotel } from './components/api';
import './App.css';
import Cards from './components/Cards/Cards';
import Map from './components/Map/Map';
// import Mapper from './components/Mapper/Mapper';

function App() {

  const [hotels, setHotels] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  // const [tot, setTot] = useState('');
  const [type, setType] = useState('hotels');
  const [rating, setRating] = useState('All');
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  
 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
        setCoordinates({lat:latitude, lng:longitude})
    })
  },[]);

  // useEffect(() => {
  //   const filteredPlaces = hotels.filter((hotel) => hotel.rating > rating);

  //   setFilteredPlaces(filteredPlaces)
  // },[rating, hotels]);



  useEffect(() => {
  
    getHotels(type, bounds.ne, bounds.sw)
    .then((data) => {
      setHotels(data);
      setFilteredPlaces([]);
      console.log(data);
      
    })
  },[type, coordinates, bounds]);




  return (
    <Router>
      <Navbar />

      <Switch>
      <Route exact path="/" component={Homepage } setCoordinates={setCoordinates}/>
      </Switch>
     
      <Cards 
      hotels={filteredPlaces.length ? filteredPlaces : hotels} 
      type={type} 
      setType={setType} 
      rating={rating}
      setRating={setRating}
      />

      <Map 
      hotels={filteredPlaces.length ? filteredPlaces : hotels} 
      coordinates={coordinates} 
      setCoordinates={setCoordinates} 
      setBounds={setBounds}
      type={type}
      rating={rating}
      setType={setType}
      setRating={setRating}

      />

      {/* <Mapper /> */}

      </Router>
   
  );
}

export default App;
