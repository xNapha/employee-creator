import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <NavLink to="/employee-creator/">Home</NavLink>
      <NavLink to="/employee-creator/employees/">Employees</NavLink>
      <NavLink to="/employee-creator/add-employees/">Add Employee</NavLink>
    </div>
  );
};

export default NavigationBar;
