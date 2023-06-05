import { useEffect } from "react";
import { EmployeeState, FormValues } from "../../utility/types";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFormValues,
  fetchAllEmployees,
  setIsFormVisible,
} from "../../slices/employeeSlice";
import { AppDispatch } from "../../../store";
import Employee from "../Employee/Employee";

const EmployeeList = () => {
  const employee = useSelector((state: EmployeeState) => state.employee);

  const { isLoading, employees, error } = employee;

  const dispatch = useDispatch<AppDispatch>();

  const renderEmployees = employees.map((employee: FormValues) => {
    return <Employee key={employee.id} employee={employee} />;
  });

  useEffect(() => {
    dispatch(fetchAllEmployees());
  }, []);

  return (
    <div>
      <header className="bg-sky-50 h-64">
        <h1 className=" container mx-auto text-black text-6xl flex justify-left items-center h-full">
          Employees' list
        </h1>
      </header>
      <section className=" container mx-auto">
        <div className="flex flex-row justify-between items-center h-24 py-6">
          <p>Please click on 'Edit' to find more details of each employee</p>
          <button
            className="bg-emerald-400 text-white rounded-lg h-6/12 p-2"
            onClick={() => {
              dispatch(setIsFormVisible());
              dispatch(deleteFormValues());
            }}
          >
            Add new employee
          </button>
        </div>
        <div>
          {isLoading && (
            <div className="h-96 text-2xl flex justify-center items-center">
              Loading...
            </div>
          )}
          {!isLoading && error ? <div>{error}</div> : null}
          {!isLoading && employees.length ? <div>{renderEmployees}</div> : null}
        </div>
      </section>
    </div>
  );
};

export default EmployeeList;
