import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Employee from "../containers/Employee/Employee";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Employee component tests", () => {
  const employeeValues = {
    id: 1,
    firstName: "Bobby",
    middleName: "",
    lastName: "Smith",
    mobileNumber: "0412345678",
    email: "bobbySmith@testing.com",
    address: {
      id: 1,
      streetNumber: "1",
      streetName: "Test Street",
      suburb: "Melbourne",
      state: "VIC",
      postCode: "3000",
    },
    employmentStatus: {
      id: 1,
      contractType: "Permanent",
      startDate: "2017/05/06",
      endDate: null,
      isOnGoing: true,
      timeBasis: "Full-time",
      hoursPerWeek: "38.5",
    },
  };
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Employee employee={employeeValues} />
      </Provider>
    );
  });

  it("Should the employees name, contract type, and email", () => {
    const firstEmployeeName = screen.getByText(/Bobby Smith/i);
    expect(firstEmployeeName).toBeInTheDocument();
    const firstEmployeeContract = screen.getByText(/Permanent - 6yrs/i);
    expect(firstEmployeeContract).toBeInTheDocument();
    const firstEmployeeEmail = screen.getByText(/bobbySmith@testing.com/i);
    expect(firstEmployeeEmail).toBeInTheDocument();
  });

  it("Should render the Edit and remove text links", () => {
    const editText = screen.getByText(/edit/i);
    expect(editText).toBeInTheDocument();
    const removeText = screen.getByText(/remove/i);
    expect(removeText).toBeInTheDocument();
  });
});
