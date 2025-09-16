import FilterUserWithCallback from "./useCallback/FilterUserWithCallback";
import FilterUser from "./useMemo/FilterUser";

const App = () => {
  return (
    <>
      <h1>Hello</h1>

      <FilterUser/>
      <FilterUserWithCallback/>
    </>
  )
};

export default App;
