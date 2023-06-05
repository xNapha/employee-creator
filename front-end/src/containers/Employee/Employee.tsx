import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import {
  removeEmployee,
  fetchAllEmployees,
  setIsFormVisible,
} from "../../slices/employeeSlice";
import { addFormValues } from "../../slices/employeeSlice";
import { EmployeeComponentType } from "../../utility/types";

const Employee = ({ employee }: EmployeeComponentType) => {
  const { id, firstName, middleName, lastName, email, employmentStatus } =
    employee;

  const dispatch = useDispatch<AppDispatch>();

  const capitaliseFirstLetter = (word: string) => {
    return word.toLowerCase().replace(/./, (v) => v.toUpperCase());
  };

  const editButtonHandle = () => {
    dispatch(addFormValues(employee));
    dispatch(setIsFormVisible());
  };

  const removeButtonHandle = async () => {
    const response = await dispatch(removeEmployee(id));
    if (response.payload) {
      dispatch(fetchAllEmployees());
    }
  };

  const startDate = !employmentStatus.startDate
    ? new Date()
    : new Date(employmentStatus.startDate);

  const endDate = !employmentStatus.endDate
    ? new Date()
    : new Date(employmentStatus.endDate);

  const name = `${capitaliseFirstLetter(firstName)} ${
    middleName ? capitaliseFirstLetter(middleName) : ""
  } ${capitaliseFirstLetter(lastName)}`;

  const contractDetails = `${capitaliseFirstLetter(
    employmentStatus.contractType
  )} - ${endDate.getFullYear() - startDate.getFullYear() + 1}yrs`;

  return (
    <div className="container mx-auto">
      <hr />
      <div className="flex flex-row justify-between h-28">
        <div className="flex flex-col justify-between h-28 py-3">
          <p className="font-bold">{name}</p>
          <p className="font-normal">{contractDetails}</p>
          <p className="font-light">
            {email ? capitaliseFirstLetter(email) : ""}
          </p>
        </div>
        <div className="py-3">
          <button
            className="text-emerald-400 rounded-md px-2 "
            onClick={editButtonHandle}
          >
            Edit
          </button>
          <button
            className="text-emerald-400 rounded-md px-2"
            onClick={removeButtonHandle}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
