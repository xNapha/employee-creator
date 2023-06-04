export type FormValues = {
  id: number | undefined;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string | null;
  mobileNumber: string;
  address: AddressValues;
  employmentStatus: EmploymentStatusValues;
};

export type AddressValues = {
  id: number | undefined;
  streetNumber: string;
  streetName: string;
  suburb: string;
  state: string;
  postCode: string;
};

export type EmploymentStatusValues = {
  id: number | undefined;
  contractType: string;
  startDate: string | null;
  endDate: string | null;
  isOnGoing: boolean;
  timeBasis: string;
  hoursPerWeek: string;
};

export type UpdateEmployeeTypes = {
  id: number | undefined;
  data: FormValues | undefined;
};

export type ReduxState = {
  loading: boolean;
  employees: string | any[];
  error: string | undefined;
  employeeFormData: FormValues | undefined;
};

export type EmployeeComponentType = {
  employee: FormValues;
};

export type CategoriesType = {
  labelText: string;
  registerText: string;
};

export type UpdateForm = {
  updateForm: FormValues | undefined;
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isFormVisible: boolean;
};
