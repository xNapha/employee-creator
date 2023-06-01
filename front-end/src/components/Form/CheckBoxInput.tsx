import { useFormContext } from "react-hook-form";
type CheckBoxInputProps = {
  inputName: string;
  labelText: string;
  registerText: string;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  isDisabled: boolean;
};
const CheckBoxInput = ({
  inputName,
  labelText,
  registerText,
  setIsDisabled,
  isDisabled,
}: CheckBoxInputProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <input
        {...register(registerText)}
        type="checkbox"
        id={labelText.toLowerCase()}
        value={labelText.toLowerCase()}
        name={inputName}
        onClick={() => {
          setIsDisabled(!isDisabled);
        }}
      />
      <label htmlFor={labelText.toLowerCase()}>{labelText}</label>
    </div>
  );
};

export default CheckBoxInput;
