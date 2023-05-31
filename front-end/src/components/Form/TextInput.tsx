import { useFormContext } from "react-hook-form";

type TextInputProps = {
  inputType: string;
  labelText: string;
  registerText: string;
};

const TextInput = ({ inputType, labelText, registerText }: TextInputProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="">{labelText}</label>
      <input type={inputType} {...register(registerText)} />
    </div>
  );
};

export default TextInput;
