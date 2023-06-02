import { FormValues } from "../../utility/types";

const Employee = ({ firstName, middleName, lastName, email }: FormValues) => {
  return (
    <div>
      <h2>{`${firstName} ${middleName ? middleName : ""} ${lastName}`}</h2>
      <h3>{email}</h3>
    </div>
  );
};

export default Employee;
