import { describe, expect, it } from "vitest";
import reducer, {
  addFormValues,
  deleteFormValues,
  setIsFormVisible,
  fetchAllEmployees,
} from "../slices/employeeSlice";

describe("employeeSlice tests", () => {
  const date = new Date().toISOString();
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
      startDate: date,
      endDate: null,
      isOnGoing: true,
      timeBasis: "Full-time",
      hoursPerWeek: "38.5",
    },
  };

  const initialState = {
    isLoading: false,
    employees: [],
    error: "",
    employeeFormData: employeeValues,
    isFormVisible: false,
  };

  it("Should return its initial state", () => {
    const employeeRedux = reducer(initialState, { type: "unknown" });
    expect(employeeRedux.employeeFormData).toEqual(employeeValues);
    expect(employeeRedux.employees).toHaveLength(0);
    expect(employeeRedux.error).toBe("");
    expect(employeeRedux.isLoading).toBeFalsy();
    expect(employeeRedux.isFormVisible).toBeFalsy();
  });
  it("Should employee form values for update form", () => {
    const employeeRedux = reducer(initialState, addFormValues(employeeValues));
    expect(employeeRedux.employeeFormData).toBe(employeeValues);
  });
  it("Should return state employe form data equal to undefined", () => {
    const employeeRedux = reducer(initialState, deleteFormValues());
    expect(employeeRedux.employeeFormData).toBeUndefined;
  });
  it("Should return state employe form data equal to undefined", () => {
    const employeeRedux = reducer(initialState, setIsFormVisible());
    expect(employeeRedux.employeeFormData).toBeTruthy;
  });

  it("Should set isLoading to true upon pending", () => {
    const employeeRedux = reducer(initialState, {
      type: fetchAllEmployees.pending.type,
    });
    expect(employeeRedux.isLoading).toBeTruthy();
  });

  it("Should set isLoading to false upon reject, and return error message", () => {
    const employeeRedux = reducer(initialState, {
      type: fetchAllEmployees.rejected.type,
      error: { message: "failed" },
    });
    expect(employeeRedux.isLoading).toBeFalsy();
    expect(employeeRedux.error).toBe("failed");
  });
});
