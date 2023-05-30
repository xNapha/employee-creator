type TextInputProps = {
  inputType: string;
  labelText: string;
};

const TextInput = ({ inputType, labelText }: TextInputProps) => {
  return (
    <div>
      <label htmlFor="">{labelText}</label>
      <input type={inputType} />
    </div>
  );
};

export default TextInput;
