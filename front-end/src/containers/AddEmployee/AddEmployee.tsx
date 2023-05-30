import TextInput from "../../components/Form/TextInput";
import DateInput from "../../components/Form/DateInput";
import {
  renderRadioInputComponents,
  renderTextInputComponents,
} from "../../services/AddEmployeeHelpers";

const AddEmployee = () => {
  // const { reset, handleSubmit } = useForm();

  const personalInformation = {
    inputType: "text",
    labelTexts: ["Frist name", "Middle name", "Last name"],
  };

  const contactDetails = {
    inputType: "text",
    labelTexts: ["Mobile number", "Residential address"],
  };

  const contractType = {
    inputName: "contract",
    labelTexts: ["Permanent", "Contract"],
  };

  const timeBasis = {
    inputName: "timeBasis",
    labelTexts: ["Full-time", "Part-time"],
  };

  return (
    <>
      <h1>Employee Details</h1>
      <form>
        <h2>Personal Information</h2>
        {renderTextInputComponents(personalInformation)}

        <h2>Contact Details</h2>
        <TextInput inputType="email" labelText="Email address" />
        {renderTextInputComponents(contactDetails)}

        <h2>Employee Status</h2>
        <h4>What is the contract type?</h4>
        {renderRadioInputComponents(contractType)}

        <DateInput labelText="Start date" />
        <DateInput labelText="End date" />

        <TextInput inputType="checkbox" labelText="On going" />

        <h4>Is this on a full-time or part-time basis?</h4>
        {renderRadioInputComponents(timeBasis)}

        <TextInput inputType="text" labelText="Hours per week" />
      </form>
    </>
  );
};

export default AddEmployee;
