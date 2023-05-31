import { useFormContext } from "react-hook-form";

type DateInputProps = {
  labelText: string;
  registerText: string;
};

const DateInput = ({ labelText, registerText }: DateInputProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <label>{labelText}</label>
      <input type="date" {...register(registerText)} />
    </div>
  );
};

export default DateInput;
