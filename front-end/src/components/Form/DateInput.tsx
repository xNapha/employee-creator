import { useFormContext } from "react-hook-form";

type DateInputProps = {
  labelText: string;
  registerText: string;
  disabled: boolean;
};

const DateInput = ({ labelText, registerText, disabled }: DateInputProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <label>{labelText}</label>
      <input
        type="date"
        {...register(registerText, {
          valueAsDate: true,
          disabled: disabled,
        })}
      />
    </div>
  );
};

export default DateInput;
