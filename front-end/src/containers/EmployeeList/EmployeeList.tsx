import { useEffect, useState } from "react";
import { getEmployees } from "../../services/axios";

const EmployeeList = () => {
  const [test, setTest] = useState<any[]>();
  useEffect(() => {
    getEmployees(setTest);
  }, []);
  const renderEmployees = test?.map((employee) => {
    return <p>{employee.email}</p>;
  });
  return <div>{renderEmployees}</div>;
};

export default EmployeeList;
