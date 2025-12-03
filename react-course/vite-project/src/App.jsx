import { Routes, Route } from 'react-router'
import { Homepage } from './Pages/Homepage.jsx'
import { CheckoutPage } from './Pages/CheckoutPage.jsx'
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      
    </Routes>
  )

      
}
export default App
