import { Route, Routes } from "react-router-dom";
import Homepage from "./containers/Homepage/Homepage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/employee-creator/" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default App;
