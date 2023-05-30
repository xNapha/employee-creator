type RadioInputProps = {
  inputName: string;
  labelText: string;
};
const RadioInput = ({ inputName, labelText }: RadioInputProps) => {
  return (
    <div>
      <input
        type="radio"
        name={inputName}
        id={labelText.toLowerCase()}
        value={labelText.toLowerCase()}
      />
      <label htmlFor={labelText.toLowerCase()}>{labelText}</label>
    </div>
  );
};

export default RadioInput;
