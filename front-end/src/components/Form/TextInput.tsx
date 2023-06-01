import { useFormContext } from "react-hook-form";

type TextInputProps = {
  labelText: string;
  registerText: string;
};

const TextInput = ({ labelText, registerText }: TextInputProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="">{labelText}</label>
      <input
        {...register(registerText, {
          setValueAs: (value) => (value ? value : null),
        })}
      />
    </div>
  );
};

export default TextInput;
