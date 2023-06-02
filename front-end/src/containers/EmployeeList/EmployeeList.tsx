import { useEffect } from "react";
import { FormValues } from "../../utility/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEmployees } from "../../slices/employeeSlice";
import { AppDispatch } from "../../../store";
import Employee from "../../components/Employee/Employee";

const EmployeeList = () => {
  // const [allEmployees, setAllEmployees] = useState([]);
  // const employeeData = useRef([]);
  const employee = useSelector((state: any) => state.employee);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAllEmployees());
  }, []);
  const renderEmployees = employee?.employees?.map((employee: FormValues) => {
    const {
      id,
      firstName,
      middleName,
      lastName,
      email,
      mobileNumber,
      address,
      employmentStatus,
    } = employee;
    return (
      <Employee
        key={id}
        id={id}
        firstName={firstName}
        middleName={middleName}
        lastName={lastName}
        email={email}
        mobileNumber={mobileNumber}
        address={address}
        employmentStatus={employmentStatus}
      />
    );
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
