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
  setIsFormVisible,
  updateEmployee,
} from "../../slices/employeeSlice";
import FormSectionTitle from "../../components/Form/FormSectionTitle";

const EmployeeForm = ({ updateForm }: UpdateForm) => {
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
    dispatch(setIsFormVisible());
  };

  return (
    <FormProvider {...methods}>
      <div className="absolute flex justify-center items-center h-screen w-screen">
        <div
          onClick={() => {
            dispatch(setIsFormVisible());
          }}
          className="w-screen h-screen bg-neutral-800 absolute top-0 z-10 opacity-95"
        ></div>
        <section className="w-9/12 z-20 bg-white absolute h-[90vh]">
          <div>
            <h1>Employee Details</h1>
            <button
              type="button"
              onClick={() => {
                dispatch(setIsFormVisible());
              }}
            >
              Exit
            </button>
          </div>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div>
              <FormSectionTitle title="Personal Information" />
              {renderTextInputComponents(personalInformation)}
            </div>

            <div>
              <FormSectionTitle title="Contact Details" />
              {renderTextInputComponents(contactDetails)}
            </div>

            <div>
              <FormSectionTitle title="Employee Status" />
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
        </section>
      </div>
    </FormProvider>
  );
};

export default EmployeeForm;
