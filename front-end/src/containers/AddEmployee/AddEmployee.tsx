import TextInput from "../../components/Form/TextInput";
import DateInput from "../../components/Form/DateInput";
import {
  renderRadioInputComponents,
  renderTextInputComponents,
  personalInformation,
  contactDetails,
  contractType,
  timeBasis,
  defaultValues,
} from "../../services/AddEmployeeHelpers";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckBoxInput from "../../components/Form/CheckBoxInput";
import { postNewEmployee } from "../../services/axios";
import { useState } from "react";
import { FormValues } from "../../utility/types";
import { schema } from "../../utility/formSchema";

const AddEmployee = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const methods = useForm<FormValues>({
    defaultValues: { ...defaultValues },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (await postNewEmployee(data)) {
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <h1>Employee Details</h1>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <h2>Personal Information</h2>
          {renderTextInputComponents(personalInformation)}
        </div>

        <div>
          <h2>Contact Details</h2>
          {renderTextInputComponents(contactDetails)}
        </div>

        <div>
          <h2>Employee Status</h2>
          <h4>What is the contract type?</h4>
          {renderRadioInputComponents(contractType)}
        </div>

        <div>
          <DateInput
            labelText="Start date"
            registerText="employmentStatus.startDate"
            disabled={false}
          />
          <DateInput
            labelText="End date"
            registerText="employmentStatus.endDate"
            disabled={isDisabled}
          />

          <CheckBoxInput
            inputName="isOnGoing"
            labelText="On going?"
            registerText="employmentStatus.isOnGoing"
            setIsDisabled={setIsDisabled}
            isDisabled={isDisabled}
          />
        </div>
        <div>
          <h4>Is this on a full-time or part-time basis?</h4>
          {renderRadioInputComponents(timeBasis)}
        </div>

        <TextInput
          labelText="Hours per week"
          registerText="employmentStatus.hoursPerWeek"
        />
        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={() => {
            methods.reset();
          }}
        >
          Cancel
        </button>
      </form>
    </FormProvider>
  );
};

export default AddEmployee;
