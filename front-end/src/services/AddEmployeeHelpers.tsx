import TextInput from "../components/Form/TextInput";
import RadioInput from "../components/Form/RadioInput";

type categoriesType = {
  labelText: string;
  registerText: string;
};

export const renderTextInputComponents = (obj: {
  categories: Array<categoriesType>;
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
  labelTexts: string[];
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
    startDate: undefined,
    endDate: undefined,
    isOnGoing: true,
    timeBasis: "full-time",
    hoursPerWeek: "",
  },
};
