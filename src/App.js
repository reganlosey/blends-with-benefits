import './App.scss';
import fetchData from './apiCalls';
import Homepage from './Components/Homepage/Homepage';
import { useState, useEffect } from 'react';

const App = () => {
  const [brewData, setBrewData] = useState([]);

  const getBrewsData = async () => {
    const resp = await fetchData("https://brewedtoserve.herokuapp.com/brews")
    console.log(resp)

  }

  useEffect(() => {
    getBrewsData()
  }, [])
  return (
    <h1>Grind So Fine</h1>
  )

}

export default App;
