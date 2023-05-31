import { useFormContext } from "react-hook-form";

type RadioInputProps = {
  inputName: string;
  labelText: string;
  registerText: string;
};
const RadioInput = ({
  inputName,
  labelText,
  registerText,
}: RadioInputProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <input
        {...register(registerText)}
        type="radio"
        id={labelText.toLowerCase()}
        value={labelText.toLowerCase()}
        name={inputName}
      />
      <label htmlFor={labelText.toLowerCase()}>{labelText}</label>
    </div>
  );
};

export default RadioInput;
