import TextInput from "../components/Form/TextInput";
import RadioInput from "../components/Form/RadioInput";

export const renderTextInputComponents = (arr: {
  inputType: string;
  labelTexts: string[];
}) => {
  return arr.labelTexts.map((labelText: string) => (
    <TextInput
      key={labelText}
      inputType={arr.inputType}
      labelText={`${labelText} name`}
    />
  ));
};

export const renderRadioInputComponents = (arr: {
  inputName: string;
  labelTexts: string[];
}) => {
  return arr.labelTexts.map((labelText) => (
    <RadioInput
      key={labelText}
      inputName={arr.inputName}
      labelText={labelText}
    />
  ));
};
