import  axios from 'axios' 
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import { Homepage } from './Pages/Homepage.jsx'
import { CheckoutPage } from './Pages/CheckoutPage.jsx'
import { OrdersPage } from './Pages/OrdersPage.jsx'
import './App.css'


function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
            .get('/api/cart-items?expand=product')
            .then((response) => setCart(response.data))
            .catch((err) => console.error('Failed to load cart', err));
  }, []);

  return (
    <Routes>
      <Route index element={<Homepage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage />} />
      
    </Routes>
  )

      
}
export default App
