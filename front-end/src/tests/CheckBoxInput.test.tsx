import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckBoxInput from "../components/Form/CheckBoxInput";
import { FormProvider, useForm } from "react-hook-form";

describe("CheckBoxInput component tests", () => {
  type TestDefaultValuesType = {
    testing: boolean;
  };
  const testDefaultValues = {
    testing: false,
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
        <CheckBoxInput
          inputName="isOnGoing"
          labelText="On going?"
          registerText="employmentStatus.isOnGoing"
          setIsDisabled={vi.fn()}
          isDisabled={false}
        />
      </Wrapper>
    );
  });

  it("Should render the checkbox", () => {
    const checkBox = screen.getByLabelText("On going?");
    expect(checkBox).toBeInTheDocument();
  });

  it("Should be defaulted to a false value", () => {
    const checkBox = screen.getByLabelText("On going?");
    expect(checkBox).not.toBeChecked();
  });

  it("Should return true it has been clicked", () => {
    const checkBox = screen.getByLabelText("On going?");
    fireEvent.click(checkBox);
    expect(checkBox).toBeChecked();
  });
});
