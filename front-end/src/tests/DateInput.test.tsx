import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import DateInput from "../components/Form/DateInput";
import { FormProvider, useForm } from "react-hook-form";

describe("DateInput component tests", () => {
  type TestDefaultValuesType = {
    labelText: string;
    registerText: string;
    disabled: boolean;
  };
  const Wrapper = ({ children }: any) => {
    const methods = useForm<TestDefaultValuesType>();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  beforeEach(() => {
    render(
      <Wrapper>
        <form aria-label="testing">
          <DateInput
            labelText="Date"
            registerText="dateInput"
            disabled={false}
          />
        </form>
      </Wrapper>
    );
  });
  it("Should render properly", () => {
    const input = screen.getByLabelText("Date");
    expect(input).toBeInTheDocument();
  });

  it("Should change value if date has been entered", () => {
    const input = screen.getByLabelText("Date");
    const form = screen.getByRole("form", { name: "testing" });
    fireEvent.change(input, { target: { value: "2017-05-12" } });
    expect(form).toHaveFormValues({
      dateInput: "2017-05-12",
    });
  });
});
