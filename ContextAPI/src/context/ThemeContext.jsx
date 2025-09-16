import { createContext, useContext, useState } from "react";

//create context
const ThemeContext = createContext();

// Provider Context
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = ()=> {
        setTheme((prev) => (prev === "light" ? "dark": "light"));
    };

    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );


};

// custom hook for easy access
export const useTheme = () => useContext(ThemeContext);
