import { useTheme } from "../../context/ThemeContext"


const ThemeToggler = ()=> {
    const {toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
    )
};

export default ThemeToggler;
