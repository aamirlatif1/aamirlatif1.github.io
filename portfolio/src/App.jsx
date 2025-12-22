import React from 'react'
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';


export const App = () => {
  return (
    <ThemeProvider>
    <div>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection /> 
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
    </ThemeProvider>
  )
}

export default App
