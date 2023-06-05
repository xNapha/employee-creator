type FormSectionTitleType = {
  title: string;
};

const FormSectionTitle = ({ title }: FormSectionTitleType) => {
  return (
    <>
      <h2 className="font-bold text-2xl">{title}</h2>
    </>
  );
};

export default FormSectionTitle;
