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
  startDate: Date;
  endDate: Date | null;
  isOnGoing: boolean;
  timeBasis: string;
  hoursPerWeek: string;
};
