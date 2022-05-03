import './App.scss';
import fetchData from './apiCalls';
import Homepage from './Components/Homepage/Homepage';
import Header from './Components/Header/Header';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [brewData, setBrewData] = useState([]);

  const getBrewsData = async () => {
    const resp = await fetchData("https://brewedtoserve.herokuapp.com/brews")
    setBrewData(resp)
  }

  useEffect(() => {
    getBrewsData()
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  )

}

export default App;
