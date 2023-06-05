import EmployeeList from "./containers/EmployeeList/EmployeeList";
import EmployeeForm from "./containers/EmployeeForm/EmployeeForm";
import { useSelector } from "react-redux";
import { EmployeeState } from "./utility/types";
const App = () => {
  const employee = useSelector((state: EmployeeState) => state.employee);
  const { employeeFormData, isFormVisible } = employee;
  return (
    <main>
      {isFormVisible && <EmployeeForm updateForm={employeeFormData} />}
      <EmployeeList />
    </main>
  );
};

export default App;
