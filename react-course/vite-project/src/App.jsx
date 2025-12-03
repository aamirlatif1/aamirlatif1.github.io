import { Routes, Route } from 'react-router'
import { Homepage } from './Pages/Homepage.jsx'
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/checkout" element={<div>Checkout Page</div>} />
      <Route path="/orders" element={<div>Orders Page</div>} />
      <Route path="*" element={<div>404 Not Found</div>} />
      {/* Add more routes as needed */}
      {/* Example: <Route path="/product/:id" element={<ProductPage />} /> */}
      {/* Example: <Route path="/about" element={<AboutPage />} /> */}
    </Routes>
  )

      
}
export default App
