import TextInput from "../../components/Form/TextInput";
import DateInput from "../../components/Form/DateInput";
import {
  renderRadioInputComponents,
  renderTextInputComponents,
  personalInformation,
  contactDetails,
  contractType,
  timeBasis,
} from "../../services/AddEmployeeHelpers";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CheckBoxInput from "../../components/Form/CheckBoxInput";

const schema = yup.object({
  firstName: yup.string().required(),
  middleName: yup.string(),
  lastName: yup.string().required(),
  email: yup.string().email(),
  mobileNumber: yup.string(),
  address: yup.object({
    streetNumber: yup.string().required(),
    streetName: yup.string().required(),
    suburb: yup.string().required(),
    state: yup.string().required(),
    postCode: yup.string().required(),
  }),
  employmentStatus: yup.object({
    contract: yup.string().required(),
    onGoing: yup.boolean(),
    timeBasis: yup.string().required(),
  }),
});

const AddEmployee = () => {
  const methods = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <h1>Employee Details</h1>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h2>Personal Information</h2>
        {renderTextInputComponents(personalInformation)}

        <h2>Contact Details</h2>
        {renderTextInputComponents(contactDetails)}
        {/* street number, street name, suburb, state, postcode */}

        <h2>Employee Status</h2>
        <h4>What is the contract type?</h4>
        {renderRadioInputComponents(contractType)}

        <DateInput
          labelText="Start date"
          registerText="employmentStatus.startDate"
        />
        <DateInput
          labelText="End date"
          registerText="employmentStatus.endDate"
        />

        <CheckBoxInput
          inputName="onGoing"
          labelText="On going"
          registerText="employmentStatus.onGoing"
        />

        <h4>Is this on a full-time or part-time basis?</h4>
        {renderRadioInputComponents(timeBasis)}

        <TextInput
          labelText="Hours per week"
          registerText="employmentStatus.hoursPerWeek"
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={methods.reset}>
          Cancel
        </button>
      </form>
    </FormProvider>
  );
};

export default AddEmployee;
