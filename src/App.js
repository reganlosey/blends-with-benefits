import './App.scss';
import fetchData from './apiCalls';
import Homepage from './Components/Homepage/Homepage';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllBrewsAsync } from './state/brewSlice';
import { addItemToCart } from './state/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  const brewData = useSelector((state) => state.brews)
  const cartItems = useSelector((state) => state.cartItems)

  useEffect(() => {
    dispatch(getAllBrewsAsync());
  }, [dispatch])

  const addToCart = (id) => {
    const clicked = brewData.find(item => item.id === id)
    if (clicked) {
      console.log(clicked)
      dispatch(
        addItemToCart({
          id: clicked.id,
          productName: clicked.productName,
          type: clicked.type,
          price: clicked.price,
          hasCaffeine: clicked.hasCaffeine,
          quantity: clicked.quantity
        })
      )
    }
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
