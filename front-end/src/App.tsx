import { Route, Routes } from "react-router-dom";
import Homepage from "./containers/Homepage/Homepage";
import NavigationBar from "./containers/NavigationBar/NavigationBar";
import EmployeeList from "./containers/EmployeeList/EmployeeList";
import AddEmployee from "./containers/AddEmployee/AddEmployee";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/employee-creator/" element={<Homepage />} />
        <Route path="/employee-creator/employees" element={<EmployeeList />} />
        <Route
          path="/employee-creator/add-employees"
          element={<AddEmployee />}
        />
      </Routes>
    </>
  );
};

export default App;
