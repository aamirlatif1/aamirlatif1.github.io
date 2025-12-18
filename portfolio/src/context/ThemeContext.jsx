import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window === 'undefined') return true;
        const stored = localStorage.getItem('theme');
        return stored ? stored === 'dark' : true;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) root.classList.add('dark');
        else root.classList.remove('dark');

        try {
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        } catch {
            // ignore localStorage write errors in private-mode or restricted environments
            console.warn('Could not persist theme to localStorage');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode((s) => !s);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);


    