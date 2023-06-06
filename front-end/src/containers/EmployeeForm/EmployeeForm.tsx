import TextInput from "../../components/Form/TextInput";
import DateInput from "../../components/Form/DateInput";
import FormButton from "../../components/Form/FormButton";
import FormSubSection from "../../components/Form/FormSubSection";
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
import FormSection from "../../components/Form/FormSection";

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
      <section className="absolute flex justify-center items-center h-screen w-screen ">
        <div
          onClick={() => {
            dispatch(setIsFormVisible());
          }}
          className="w-screen h-screen bg-neutral-800 absolute top-0 z-10 opacity-95"
        ></div>
        <section className="w-5/12 h-[83vh] z-20 bg-white absolute rounded-3xl px-10 py-5 overflow-auto">
          <header className="h-10 flex flex-row justify-between items-center">
            <h1 className="text-4xl font-bold">Employee Details</h1>
            <button
              type="button"
              className="bg-emerald-400 px-3 py-1 rounded-xl text-white"
              onClick={() => {
                dispatch(setIsFormVisible());
              }}
            >
              Exit
            </button>
          </header>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <FormSection extraClasses="">
              <FormSectionTitle> Personal Information</FormSectionTitle>
              {renderTextInputComponents(personalInformation)}
            </FormSection>

            <FormSection extraClasses="">
              <FormSectionTitle>Contact Details</FormSectionTitle>
              {renderTextInputComponents(contactDetails)}
            </FormSection>

            <FormSection extraClasses="">
              <FormSectionTitle>Employee Status</FormSectionTitle>

              <FormSubSection extraClasses="grid grid-cols-3 justify-items-end">
                <h4>What is the contract type?</h4>
                {renderRadioInputComponents(contractType)}
              </FormSubSection>
              <FormSubSection extraClasses="grid grid-cols-2 gap-x-5">
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
              </FormSubSection>

              <FormSubSection extraClasses="grid grid-cols-3 justify-items-end">
                <h4>Is this on a full-time or part-time basis?</h4>
                {renderRadioInputComponents(timeBasis)}
              </FormSubSection>

              <TextInput
                labelText="Hours per week"
                registerText="employmentStatus.hoursPerWeek"
                isRequired={true}
              />
            </FormSection>

            <FormSection extraClasses="flex flex-row justify-center gap-20">
              <FormButton type="submit" onClick={undefined}>
                Submit
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  methods.reset();
                }}
              >
                Reset
              </FormButton>
            </FormSection>
          </form>
        </section>
      </section>
    </FormProvider>
  );
};

export default EmployeeForm;
