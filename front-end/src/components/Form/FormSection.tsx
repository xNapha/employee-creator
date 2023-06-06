type FormSectionTypes = {
  children: any;
  extraClasses: string;
};
const FormSection = ({ children, extraClasses }: FormSectionTypes) => {
  return <section className={`mt-10 ${extraClasses}`}>{children}</section>;
};

export default FormSection;
