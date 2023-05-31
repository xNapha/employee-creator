import TextInput from "../../components/Form/TextInput";
import DateInput from "../../components/Form/DateInput";
import {
  renderRadioInputComponents,
  renderTextInputComponents,
} from "../../services/AddEmployeeHelpers";
import { useForm, FormProvider } from "react-hook-form";

const AddEmployee = () => {
  const methods = useForm();

  const personalInformation = {
    inputType: "text",
    labelTexts: ["First name", "Middle name", "Last name"],
    registerText: ["firstName", "middleName", "lastName"],
  };

  const contactDetails = {
    inputType: "text",
    labelTexts: ["Mobile number", "Residential address"],
    registerText: ["mobileNumber", "address.streetName"],
  };

  const contractType = {
    inputName: "contract",
    labelTexts: ["Permanent", "Contract"],
    registerText: "employmentStatus.contract",
  };

  const timeBasis = {
    inputName: "timeBasis",
    labelTexts: ["Full-time", "Part-time"],
    registerText: "employmentStatus.timeBasis",
  };

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
        <TextInput
          inputType="email"
          labelText="Email address"
          registerText="email"
        />
        <div {...methods.register("address")}>
          {renderTextInputComponents(contactDetails)}
        </div>

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

        <TextInput
          inputType="checkbox"
          labelText="On going"
          registerText="employmentStatus.onGoing"
        />

        <h4>Is this on a full-time or part-time basis?</h4>
        {renderRadioInputComponents(timeBasis)}

        <TextInput
          inputType="text"
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
