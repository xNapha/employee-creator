import { useFormContext } from "react-hook-form";

type DateInputProps = {
  labelText: string;
  registerText: string;
  disabled: boolean;
};

const DateInput = ({ labelText, registerText, disabled }: DateInputProps) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-row justify-between my-3">
      <label htmlFor={registerText}>{labelText}</label>
      <input
        type="date"
        {...register(registerText, {
          valueAsDate: true,
          disabled: disabled,
        })}
        id={registerText}
        className="text-right w-36 pl-2 border-solid border-slate-400 border-2 rounded-lg"
      />
    </div>
  );
};

export default DateInput;
