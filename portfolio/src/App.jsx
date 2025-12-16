import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/sections/Navbar'
import HeroSection from './components/sections/HeroSection'


export const App = () => {
  return (
    <ThemeProvider>
    <div>
      <Navbar />
      <HeroSection />
      
    </div>
    </ThemeProvider>
  )
}

export default App
