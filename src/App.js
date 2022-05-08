import './App.scss';
import fetchData from './apiCalls';
import Homepage from './Components/Homepage/Homepage';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import { addCartItem } from './state/brewSlice';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {getAllBrewsAsync} from './state/brewSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  // const [brewData, setBrewData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const dispatch = useDispatch()
  const brewData = useSelector((state) => state.brews)

  const getBrewsData = async () => {
    const resp = await fetchData("https://brewedtoserve.herokuapp.com/brews")
    // setBrewData(resp)
  }

  useEffect(() => {
    dispatch(getAllBrewsAsync());

  }, [dispatch])

  const addToCart = (id) => {
    const clickedBrew = brewData.forEach((brew) => {
      if (brew.id === id && !cartItems.includes(brew)) {
        brew.quantity = 1
        setCartItems([...cartItems, brew])
      }
      else if (brew.id === id && cartItems.includes(brew)) {
        brew.quantity += 1
      }
    })
    return clickedBrew
  }

  const onClick = (id) => {
    const clickedBrew = brewData.forEach((brew) => {
      if (brew.id === id && !cartItems.includes(brew)) {
        brew.quantity = 1
        dispatch(
          addCartItem({
            brew
          })
        )
      }
      else if (brew.id === id && cartItems.includes(brew)) {
        brew.quantity += 1
      }
    })
    return clickedBrew
  }


  // const adjustQuantity = (e, id) => {
  //   const adjustment = cartItems.forEach((brew) => {
  //     const matchedBrew = brew.id === id
  //     if (e.target.className.includes('increase') && matchedBrew) {
  //       console.log('increase>>', id)
  //       brew.quantity++
  //       setQuantity(brew.quantity)
  //     } else if (e.target.className.includes('decrease') && quantity > 0 && matchedBrew) {
  //       brew.quantity--
  //       setQuantity(brew.quantity)
  //     } else if(e.target.className.includes('remove') && matchedBrew){
  //       brew.quantity = 0;
  //       setQuantity(brew.quantity)
  //     }
  //   })
  // }

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
