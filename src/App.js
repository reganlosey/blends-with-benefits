import './App.scss';
import Homepage from './Components/Homepage/Homepage';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import Orders from './Components/Orders/Orders';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllBrewsAsync } from './redux/brewSlice';
import { addItemToCart, getCartAsync, addToCartAsync } from './redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  const [newData, setData] = useState([])
  const brewData = useSelector((state) => state.brews.allBrews)

  useEffect(() => {
    dispatch(getAllBrewsAsync());
  }, [dispatch])

  const newFetch = async () => {
    const resp = await fetch('http://localhost:3001/cart')
    if (!resp.ok) {
      throw new Error(`Err: ${resp.status}`)
    }
    const respJson = await resp.json()
    setData(respJson)
  }

  const postToCart = async () => {
    const newCartItem = {
      id: 190,
      productName: "Brazilian Arabica",
      type: "Coffee",
      price: 10, hasCaffeine: true, quantity: 0

    }
    dispatch(addToCartAsync(newCartItem))
  }


  const addToCart = (id) => {
    const clicked = brewData.find(item => item.id === id)
    if (clicked) {
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
    <div className="App">
      <Header />
      <button onClick={() => newFetch()}>CLICK</button>
      <button onClick={() => postToCart()}>POST</button>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop allBrews={brewData} addToCart={addToCart} />} />
        <Route path="/shop/:query" element={<Shop allBrews={brewData} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  )

}

export default App;
