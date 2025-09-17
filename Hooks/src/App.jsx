import UserData from "./custom-hooks/userData";
import FilterUserWithCallback from "./useCallback/FilterUserWithCallback";
import FilterUser from "./useMemo/FilterUser";
import PreviousCounter from "./useRef/PreviousCounter";


const App = () => {
  return (
    <>
      <h1>Hello</h1>

      {/* <PreviousCounter/> */}
      {/* <FilterUser/> */}
      {/* <FilterUserWithCallback/> */}

      <UserData/>
    </>
  )
};

export default App;
