import { useFormContext } from "react-hook-form";
import FormRequiredAsterix from "./FormRequiredAsterix";

type TextInputProps = {
  labelText: string;
  registerText: string;
  isRequired: boolean;
};

const TextInput = ({ labelText, registerText, isRequired }: TextInputProps) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-row justify-between my-3">
      <label>{labelText}</label>
      <input
        className="border-solid border-slate-400 border-2 rounded-lg px-2"
        {...register(registerText, {
          setValueAs: (value) => (value ? value : null),
        })}
      />
      <FormRequiredAsterix required={isRequired} />
    </div>
  );
};

export default TextInput;
