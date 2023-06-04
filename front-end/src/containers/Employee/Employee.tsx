import { AppDispatch } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { removeEmployee, fetchAllEmployees } from "../../slices/employeeSlice";
import { addFormValues } from "../../slices/employeeSlice";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { useState } from "react";
import { EmployeeComponentType } from "../../utility/types";

const Employee = ({ employee }: EmployeeComponentType) => {
  const { id, firstName, middleName, lastName, email, employmentStatus } =
    employee;

  const [isFormVisible, setIsFormVisible] = useState(false);

  const updateFormData = useSelector(
    (state: any) => state.employee.employeeFormData
  );

  const dispatch = useDispatch<AppDispatch>();

  const startDate = !employmentStatus.startDate
    ? new Date()
    : new Date(employmentStatus.startDate);

  const endDate = !employmentStatus.endDate
    ? new Date()
    : new Date(employmentStatus.endDate);

  const capitaliseFirstLetter = (word: string) => {
    return word.toLowerCase().replace(/./, (v) => v.toUpperCase());
  };

  return (
    <div>
      <hr />
      <div>
        <p
          onClick={() => {
            console.log("userPage");
          }}
        >{`${capitaliseFirstLetter(firstName)} ${
          middleName ? capitaliseFirstLetter(middleName) : ""
        } ${capitaliseFirstLetter(lastName)}`}</p>
        <p>{`${capitaliseFirstLetter(employmentStatus.contractType)} - ${
          endDate.getFullYear() - startDate.getFullYear() + 1
        }yrs`}</p>
        <p>{email ? capitaliseFirstLetter(email) : ""}</p>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(addFormValues(employee));
            setIsFormVisible(!isFormVisible);
          }}
        >
          Edit
        </button>
        <button
          onClick={async () => {
            const response = await dispatch(removeEmployee(id));
            if (response.payload) {
              dispatch(fetchAllEmployees());
            }
          }}
        >
          Remove
        </button>
      </div>
      {isFormVisible && (
        <EmployeeForm
          updateForm={updateFormData}
          isFormVisible={isFormVisible}
          setIsFormVisible={setIsFormVisible}
        />
      )}
    </div>
  );
};

export default Employee;
