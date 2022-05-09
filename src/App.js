import './App.scss';
import fetchData from './apiCalls';
import Homepage from './Components/Homepage/Homepage';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllBrewsAsync } from './redux/brewSlice';
import { addItemToCart } from './redux/cartSlice';
import { addUser } from './redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  const brewData = useSelector((state) => state.brews.allBrews)
  const [value, setValue] = useState('')

  useEffect(() => {
    dispatch(getAllBrewsAsync());
  }, [dispatch])

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
  const addNewUser = () => {
    if(value){
      dispatch(addUser({
        value
      }))
    }

  }

  return (
    <div>
      <Header />
      <input
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => addNewUser()}>ADD

      </button>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop allBrews={brewData} addToCart={addToCart} />} />
        <Route path="/shop/:query" element={<Shop allBrews={brewData} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )

}

export default App;
