import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ReduxState = {
  loading: false,
  employees: [],
  error: "",
};

export const fetchAllEmployees = createAsyncThunk(
  "employee/fetchAllEmployees",
  async () => {
    return await axios
      .get("http://localhost:8080/employees")
      .then((response) => response.data);
  }
);

type ReduxState = {
  loading: boolean;
  employees: [] | void;
  error: string | undefined;
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllEmployees.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAllEmployees.rejected, (state, action) => {
      state.loading = false;
      state.employees = [];
      state.error = action.error.message;
    });
  },
});

export default employeeSlice.reducer;
