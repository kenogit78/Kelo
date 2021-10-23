import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import { getHotels } from './components/api'
import './App.css';
import Cards from './components/Cards/Cards';

function App() {

  const [hotels, setHotels] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
        setCoordinates({lat:latitude, lng:longitude})
    })
  },[]);

  useEffect(() => {
    console.log(coordinates)
    getHotels()
    .then((data) => {
      setHotels(data)
      console.log(data)
    })


  },[coordinates]);


  return (
    <Router>
      <Navbar />

      <Switch>
      <Route exact path="/" component={Homepage } />
      </Switch>
     
      <Cards hotels={hotels} />
      </Router>
   
  );
}

export default App;
