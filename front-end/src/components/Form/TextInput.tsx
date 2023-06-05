import { useFormContext } from "react-hook-form";

type TextInputProps = {
  labelText: string;
  registerText: string;
};

const TextInput = ({ labelText, registerText }: TextInputProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <label className="">{labelText}</label>
      <input
        className="border-solid border-black border-2 rounded-lg px-2"
        {...register(registerText, {
          setValueAs: (value) => (value ? value : null),
        })}
      />
    </div>
  );
};

export default TextInput;
