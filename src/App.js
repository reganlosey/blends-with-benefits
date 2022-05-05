import './App.scss';
import fetchData from './apiCalls';
import Homepage from './Components/Homepage/Homepage';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [brewData, setBrewData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getBrewsData = async () => {
    const resp = await fetchData("https://brewedtoserve.herokuapp.com/brews")
    setBrewData(resp)
  }

  useEffect(() => {
    getBrewsData()
  }, [])

  const addToCart = (id) => {
    const itemToAdd = brewData.forEach((brew) => {
      if (parseInt(brew.id) === id) {
        setCartItems([...cartItems, brew])
      }
    })
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop allBrews={brewData} addToCart={addToCart} />} />
        <Route path="/shop/:query" element={<Shop allBrews={brewData} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </div>
  )

}

export default App;
