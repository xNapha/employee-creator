import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FormValues } from "../utility/types";
import { UpdateEmployeeTypes, ReduxState } from "../utility/types";
import { formatDate } from "../utility/AddEmployeeHelpers";

const initialState: ReduxState = {
  loading: false,
  employees: [],
  error: "",
  employeeFormData: undefined,
};

export const fetchAllEmployees = createAsyncThunk(
  "employee/fetchAllEmployees",
  async () => {
    try {
      const response = await axios.get("http://localhost:8080/employees");
      return response.data;
    } catch (err) {
      return (err as Error).message;
    }
  }
);

export const removeEmployee = createAsyncThunk(
  "employee/removeEmployee",
  async (id: number | undefined) => {
    try {
      await axios.delete(`http://localhost:8080/employees/${id}`);
      return true;
    } catch (err) {
      return (err as Error).message;
    }
  }
);

export const addNewEmployee = createAsyncThunk(
  "employee/addNewEmployee",
  async (data: FormValues | undefined) => {
    try {
      await axios.post("http://localhost:8080/employees", data);
    } catch (err) {
      return (err as Error).message;
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (values: UpdateEmployeeTypes) => {
    const { id, data } = values;
    try {
      await axios.patch(`http://localhost:8080/employees/${id}`, data);
    } catch (err) {
      return (err as Error).message;
    }
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addFormValues(state, action) {
      state.employeeFormData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllEmployees.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllEmployees.fulfilled, (state, action) => {
      state.loading = false;
      const updated = action.payload.map((employee: FormValues) => {
        employee.employmentStatus.startDate = formatDate(
          employee.employmentStatus.startDate
        );
        employee.employmentStatus.endDate = formatDate(
          employee.employmentStatus.endDate
        );
        return employee;
      });
      state.employees = updated;
      state.error = "";
    });
    builder.addCase(fetchAllEmployees.rejected, (state, action) => {
      state.loading = false;
      state.employees = [];
      state.error = action.error.message;
    });
  },
});

export const { addFormValues } = employeeSlice.actions;
export default employeeSlice.reducer;
