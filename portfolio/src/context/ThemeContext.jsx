import { createContext, useContext, useState, useEffect } from 'react';
 
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDrakMode, toggleDarkMode] = useState(
        localStorage.getItem('theme') || 'dark'
        );
        
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDrakMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }   
    }, [isDrakMode]);

        return (
            <ThemeContext.Provider value={{ isDrakMode, toggleDarkMode }}>
                {children}
            </ThemeContext.Provider>
        );
}

export const useTheme = () => useContext(ThemeContext);


    