import './App.scss';
import fetchData from './apiCalls';
import Homepage from './Components/Homepage/Homepage';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
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
        <Route path="/shop" element={<Shop allBrews={brewData} />} />
        <Route path="/shop/:query" element={<Shop allBrews={brewData}/>} />
      </Routes>
    </div>
  )

}

export default App;
