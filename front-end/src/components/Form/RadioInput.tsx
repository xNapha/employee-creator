import { useFormContext } from "react-hook-form";

type RadioInputProps = {
  labelText: string;
  registerText: string;
};
const RadioInput = ({ labelText, registerText }: RadioInputProps) => {
  const { register } = useFormContext();
  return (
    <div className="my-1">
      <input
        {...register(registerText)}
        type="radio"
        id={labelText.toLowerCase()}
        value={labelText.toLowerCase()}
      />
      <label htmlFor={labelText.toLowerCase()}>{labelText}</label>
    </div>
  );
};

export default RadioInput;
