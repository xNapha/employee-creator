import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import RadioInput from "../components/Form/RadioInput";
import { FormProvider, useForm } from "react-hook-form";

describe("RadioInput component tests", () => {
  type TestDefaultValuesType = {
    testing: string;
  };
  const testDefaultValues = {
    testing: "first",
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
        <RadioInput labelText="first" registerText="testing" />
        <RadioInput labelText="second" registerText="testing" />
      </Wrapper>
    );
  });

  it("Should render two input fields", () => {
    const firstInput = screen.getByRole("radio", { name: "first" });
    const secondInput = screen.getByRole("radio", { name: "second" });
    expect(firstInput).toBeInTheDocument();
    expect(secondInput).toBeInTheDocument();
  });

  it("Should render with the firstInput being checked", () => {
    const firstText = screen.getByLabelText("first");
    const secondText = screen.getByLabelText("second");
    expect(firstText).toBeInTheDocument();
    expect(secondText).toBeInTheDocument();
  });

  it("Should render with the first being checked", () => {
    const firstInput = screen.getByRole("radio", { name: "first" });
    expect(firstInput).toBeChecked();
  });

  it("Should switch values when clicking different values", () => {
    const firstInput = screen.getByRole("radio", { name: "first" });
    const secondInput = screen.getByRole("radio", { name: "second" });
    expect(firstInput).toBeChecked();
    fireEvent.click(secondInput);
    expect(firstInput).not.toBeChecked();
    expect(secondInput).toBeChecked();
  });
});
