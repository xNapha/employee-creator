import { useEffect } from "react";
import { FormValues } from "../../utility/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEmployees } from "../../slices/employeeSlice";
import { AppDispatch } from "../../../store";
import Employee from "../Employee/Employee";

const EmployeeList = () => {
  const employee = useSelector((state: any) => state.employee);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllEmployees());
  }, []);

  const renderEmployees = employee?.employees?.map((employee: FormValues) => {
    return <Employee key={employee.id} employee={employee} />;
  });

  return (
    <div>
      {employee.loading && <div>loading...</div>}
      {!employee.loading && employee.error ? <div>{employee.error}</div> : null}
      {!employee.loading && employee.employees.length ? (
        <div>{renderEmployees}</div>
      ) : null}
    </div>
  );
};

export default EmployeeList;
