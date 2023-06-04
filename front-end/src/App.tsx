import EmployeeList from "./containers/EmployeeList/EmployeeList";
import EmployeeForm from "./containers/EmployeeForm/EmployeeForm";

import { useEffect, useState } from "react";
const App = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  useEffect(() => {}, [isFormVisible]);

  return (
    <div>
      <h1>Employee's list</h1>
      <button
        onClick={() => {
          setIsFormVisible(!isFormVisible);
        }}
      >
        Add new employee
      </button>
      <EmployeeList />
      {isFormVisible && (
        <EmployeeForm
          updateForm={undefined}
          setIsFormVisible={setIsFormVisible}
          isFormVisible={isFormVisible}
        />
      )}
    </div>
  );
};

export default App;
