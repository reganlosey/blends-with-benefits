import './App.scss';
import fetchData from './apiCalls';
import Homepage from './Components/Homepage/Homepage';
import { useState, useEffect } from 'react';

const App = () => {
  const [brewData, setBrewData] = useState([]);

  return (
    <h1>Grind So Fine</h1>
  )

}

export default App;
