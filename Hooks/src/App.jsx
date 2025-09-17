import UserData from "./custom-hooks/userData";
import WithLiftingStateUp from "./liftingStateUp/WithLiftingStateUp";
import WithoutLiftingStateUp from "./liftingStateUp/WithoutLiftingStateUp";
import Dashboard from "./propsDrilling/components/Dashboard";
import FilterUserWithCallback from "./useCallback/FilterUserWithCallback";
import FilterUser from "./useMemo/FilterUser";
import PreviousCounter from "./useRef/PreviousCounter";


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
    </>
  )
};

export default App;
