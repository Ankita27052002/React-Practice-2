import { useTheme } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";

const App = () => {

  const {theme} = useTheme();

  return (
    <>
      <HomePage/>
    </>
  );
};

export default App;
