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
} from "../../utility/AddEmployeeHelpers";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckBoxInput from "../../components/Form/CheckBoxInput";
import { useState } from "react";
import { FormValues, UpdateForm } from "../../utility/types";
import { schema } from "../../utility/formSchema";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import {
  addNewEmployee,
  fetchAllEmployees,
  updateEmployee,
} from "../../slices/employeeSlice";

const EmployeeForm = ({
  updateForm,
  isFormVisible,
  setIsFormVisible,
}: UpdateForm) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isDisabled, setIsDisabled] = useState(true);

  const methods = useForm<FormValues>({
    defaultValues: updateForm ? { ...updateForm } : { ...defaultValues },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (updateForm) {
      const values = { id: updateForm.id, data: data };
      await dispatch(updateEmployee(values));
    } else {
      await dispatch(addNewEmployee(data));
    }
    await dispatch(fetchAllEmployees());
    methods.reset();
    setIsFormVisible(!isFormVisible);
  };

  return (
    <FormProvider {...methods}>
      <div>
        <h1>Employee Details</h1>
        <button
          type="button"
          onClick={() => {
            setIsFormVisible(!isFormVisible);
          }}
        >
          Exit
        </button>
      </div>
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
          Reset
        </button>
      </form>
    </FormProvider>
  );
};

export default EmployeeForm;
