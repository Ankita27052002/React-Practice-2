import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserData from "./custom-hooks/userData";
import WithLiftingStateUp from "./liftingStateUp/WithLiftingStateUp";
import WithoutLiftingStateUp from "./liftingStateUp/WithoutLiftingStateUp";
import Dashboard from "./propsDrilling/components/Dashboard";
import FilterUserWithCallback from "./useCallback/FilterUserWithCallback";
import FilterUser from "./useMemo/FilterUser";
import PreviousCounter from "./useRef/PreviousCounter";
import Home from "./react-router/Home";
import About from "./react-router/About";
import ControlledComponent from "./controlled-uncontrolled-components/ControlledComponent";
import UncontrolledComponent from "./controlled-uncontrolled-components/UncontrolledComponent";


const App = () => {
  // for props drilling example
  const userName = "Kleem";

  return (
    <>
      <h1>Hello</h1>

      {/* <PreviousCounter/> */}
      {/* <FilterUser/> */}
      {/* <FilterUserWithCallback/> */}

      {/* <UserData/> */}

      {/* will get error */}
      {/* <WithoutLiftingStateUp/>  */}
      <WithLiftingStateUp/>

      {/* for props drilling example */}
      <Dashboard name={userName}/>

      {/* for Browser router */}
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>



        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>

      {/* controlled and uncontrolled component example */}
      <ControlledComponent/>
      <UncontrolledComponent/>
    </>


      
  );
};

export default App;
