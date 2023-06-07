import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import TextInput from "../components/Form/TextInput";
import { FormProvider, useForm } from "react-hook-form";

describe("TextInput component tests", () => {
  type TestDefaultValuesType = {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  const testDefaultValues = {
    firstName: "",
    middleName: "",
    lastName: "",
  };
  const Wrapper = ({ children }: any) => {
    const methods = useForm<TestDefaultValuesType>({
      defaultValues: { ...testDefaultValues },
    });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  beforeEach(() => {
    render(
      <Wrapper>
        <form aria-label="testing">
          <TextInput
            labelText="First name"
            registerText="firstName"
            isRequired={true}
          />
          <TextInput
            labelText="Middle name"
            registerText="middleName"
            isRequired={false}
          />
          <TextInput
            labelText="Last name"
            registerText="lastName"
            isRequired={true}
          />
        </form>
      </Wrapper>
    );
  });

  it("Should render properly", () => {
    const firstNameInput = screen.getByRole("textbox", { name: "First name" });
    const middleNameInput = screen.getByRole("textbox", {
      name: "Middle name",
    });
    const lastNameInput = screen.getByRole("textbox", { name: "Last name" });
    expect(firstNameInput).toBeInTheDocument();
    expect(middleNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
  });

  it("Should render the default values | empty strings", () => {
    const firstNameInput = screen.getByRole("textbox", { name: "First name" });
    const middleNameInput = screen.getByRole("textbox", {
      name: "Middle name",
    });
    const lastNameInput = screen.getByRole("textbox", { name: "Last name" });
    expect(firstNameInput).toBeEmptyDOMElement();
    expect(middleNameInput).toBeEmptyDOMElement();
    expect(lastNameInput).toBeEmptyDOMElement();
  });

  it("Should be submitted with the values inside", () => {
    const firstNameInput = screen.getByRole("textbox", { name: "First name" });
    const middleNameInput = screen.getByRole("textbox", {
      name: "Middle name",
    });
    const lastNameInput = screen.getByRole("textbox", { name: "Last name" });
    const form = screen.getByRole("form", { name: "testing" });
    fireEvent.change(firstNameInput, { target: { value: "Bob" } });
    fireEvent.change(middleNameInput, { target: { value: "Collin" } });
    fireEvent.change(lastNameInput, { target: { value: "Smith" } });
    expect(form).toHaveFormValues({
      firstName: "Bob",
      middleName: "Collin",
      lastName: "Smith",
    });
  });
});
