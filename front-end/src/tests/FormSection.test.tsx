import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import FormSection from "../components/Form/FormSection";
import FormSectionTitle from "../components/Form/FormSectionTitle";
import FormSubSection from "../components/Form/FormSubSection";

describe("All form section component tests", () => {
  it("Should render the FormSection component onto the page", () => {
    render(
      <FormSection extraClasses="">
        <div>hello</div>
      </FormSection>
    );
    const text = screen.getByText(/hello/i);
    expect(text).toBeInTheDocument();
  });

  it("Should render the FormSectionTitle component onto the page", () => {
    render(
      <FormSectionTitle extraClasses="">
        <div>hello</div>
      </FormSectionTitle>
    );
    const text = screen.getByText(/hello/i);
    expect(text).toBeInTheDocument();
  });
  it("Should render the FormSubSection component onto the page", () => {
    render(
      <FormSubSection extraClasses="">
        <div>hello</div>
      </FormSubSection>
    );
    const text = screen.getByText(/hello/i);
    expect(text).toBeInTheDocument();
  });
});
