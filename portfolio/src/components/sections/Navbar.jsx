import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
        const { isDarkMode, toggleDarkMode } = useTheme();
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const scrollToSection = (sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setIsMenuOpen(false);
                }
        };

        const sections = ['home','about','skills','projects','contact'];

        return (
            <motion.nav
                style={{ opacity: 1 }}
                className={`fixed top-0 w-full z-50 px-6 py-4 ${isDarkMode ? 'bg-gray-950/80' : 'bg-gray-50/80'} backdrop-blur-md border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center cursor-pointer">
                        <Code2 size={24} className="text-blue-500" />
                        <span className={`text-xl ml-2 ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}>Aamir Latif</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {sections.map((sec) => (
                            <motion.button
                                key={sec}
                                whileHover={{ y: 2 }}
                                onClick={() => scrollToSection(sec)}
                                className={`text-sm uppercase tracking-widest transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {sec.charAt(0).toUpperCase() + sec.slice(1)}
                            </motion.button>
                        ))}

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}
                        >
                            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex justify-between items-center mt-2">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full transition-colors ${isDarkMode ? 
                            'text-gray-400 hover:text-white hover:bg-gray-800' : 
                            'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 rounded-md transition-colors ${isDarkMode ? 
                            'text-gray-400 hover:text-white hover:bg-gray-800' :
                            'text-gray-600 hover:text-gray-900 hover:bg-gray-200'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </div>
                {/* Mobile Menu - can be implemented later */}
                <AnimatePresence>
                    {isMenuOpen && (
                     <motion.div
                        initial={{ height: 0, opacity: 0, y: -20 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -20 }}
                        className={`md:hidden mt-4 space-y-4 overflow-hidden ${isDarkMode ? 'bg-gray-950/90' : 'bg-gray-50/90'} p-4 rounded-lg border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}
                     >
                        {sections.map((item) => (
                            <motion.button
                                key={item}
                                whileHover={{ x: 5 }}
                                onClick={() => scrollToSection(item)}
                                className={`block w-full text-left text-sm uppercase tracking-widest transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </motion.button>
                        ))}
                     </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        );
};

export default Navbar;