const FormRequiredAsterix = ({ required }: any) => {
  return required ? <div className="absolute right-8">*</div> : null;
};
export default FormRequiredAsterix;
