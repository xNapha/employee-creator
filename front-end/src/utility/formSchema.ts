import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().required(),
  middleName: yup.string().nullable(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  mobileNumber: yup.string().required(),
  address: yup.object({
    streetNumber: yup.string().required(),
    streetName: yup.string().required(),
    suburb: yup.string().required(),
    state: yup.string().required(),
    postCode: yup.string().required(),
  }),
  employmentStatus: yup.object({
    contractType: yup.string().required(),
    startDate: yup.date().required(),
    endDate: yup.date(),
    isOnGoing: yup.boolean(),
    timeBasis: yup.string().required(),
    hoursPerWeek: yup.string().required(),
  }),
});
