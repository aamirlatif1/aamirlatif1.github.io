import React from 'react'
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';


export const App = () => {
  return (
    <ThemeProvider>
    <div className="pb-[100vh]">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection /> 
    </div>
    </ThemeProvider>
  )
}

export default App
