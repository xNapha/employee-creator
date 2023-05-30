type DateInputProps = {
  labelText: string;
};

const DateInput = ({ labelText }: DateInputProps) => {
  return (
    <div>
      <label htmlFor="">{labelText}</label>
      <input type="date" />
    </div>
  );
};

export default DateInput;
