import TextInput from "../components/Form/TextInput";
import RadioInput from "../components/Form/RadioInput";
import { CategoriesType } from "./types";

export const renderTextInputComponents = (obj: {
  categories: Array<CategoriesType>;
}) => {
  return obj.categories.map((category) => (
    <TextInput
      key={category.labelText}
      labelText={category.labelText}
      registerText={category.registerText}
    />
  ));
};

export const renderRadioInputComponents = (arr: {
  labelTexts: Array<string>;
  registerText: string;
}) => {
  return arr.labelTexts.map((labelText) => (
    <RadioInput
      key={labelText}
      labelText={labelText}
      registerText={arr.registerText}
    />
  ));
};

export const personalInformation = {
  categories: [
    {
      labelText: "First Name",
      registerText: "firstName",
    },
    {
      labelText: "Middle Name",
      registerText: "middleName",
    },
    {
      labelText: "Last Name",
      registerText: "lastName",
    },
  ],
};

export const contactDetails = {
  categories: [
    {
      labelText: "Email address",
      registerText: "email",
    },
    {
      labelText: "Mobile number",
      registerText: "mobileNumber",
    },
    {
      labelText: "Street number",
      registerText: "address.streetNumber",
    },
    {
      labelText: "Street name",
      registerText: "address.streetName",
    },
    {
      labelText: "Suburb",
      registerText: "address.suburb",
    },
    {
      labelText: "State",
      registerText: "address.state",
    },
    {
      labelText: "Post code",
      registerText: "address.postCode",
    },
  ],
};

export const contractType = {
  labelTexts: ["Permanent", "Contract"],
  registerText: "employmentStatus.contractType",
};

export const timeBasis = {
  labelTexts: ["Full-time", "Part-time"],
  registerText: "employmentStatus.timeBasis",
};

export const formatDate = (dateString: string | null) => {
  if (!dateString) {
    return null;
  }
  const dateObj = new Date(dateString);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const date = dateObj.getDate();
  return `${year}-${month + 1 > 9 ? month + 1 : `0${month + 1}`}-${
    date < 10 ? `0${date}` : date
  }`;
};

export const defaultValues = {
  firstName: "",
  middleName: null,
  lastName: "",
  email: "",
  mobileNumber: "",
  address: {
    streetNumber: "",
    streetName: "",
    suburb: "",
    state: "",
    postCode: "",
  },
  employmentStatus: {
    contractType: "permanent",
    startDate: formatDate(new Date().toDateString()),
    endDate: null,
    isOnGoing: true,
    timeBasis: "full-time",
    hoursPerWeek: "",
  },
};
