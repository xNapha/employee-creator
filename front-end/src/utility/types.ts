export type FormValues = {
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string | null;
  mobileNumber: string;
  address: AddressValues;
  employmentStatus: EmploymentstatusValues;
};

export type AddressValues = {
  streetNumber: string;
  streetName: string;
  suburb: string;
  state: string;
  postCode: string;
};

export type EmploymentstatusValues = {
  contractType: string;
  startDate: Date;
  endDate: Date | null;
  isOnGoing: boolean;
  timeBasis: string;
  hoursPerWeek: string;
};
