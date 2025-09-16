import { useTheme } from "../../context/ThemeContext"

const Header = ()=> {
    const {theme} = useTheme();

    return (
        <h1 style={{color: theme ==="dark"? "#fff" : "#000"}}>
            Header theme
        </h1>
    );
};

export default Header;

