import TextInput from "../components/Form/TextInput";
import RadioInput from "../components/Form/RadioInput";

export const renderTextInputComponents = (arr: {
  inputType: string;
  labelTexts: string[];
  registerText: string[];
}) => {
  return arr.labelTexts.map((labelText: string, index: number) => (
    <TextInput
      key={labelText}
      inputType={arr.inputType}
      labelText={labelText}
      registerText={arr.registerText[index]}
    />
  ));
};

export const renderRadioInputComponents = (arr: {
  inputName: string;
  labelTexts: string[];
  registerText: string;
}) => {
  return arr.labelTexts.map((labelText) => (
    <RadioInput
      key={labelText}
      inputName={arr.inputName}
      labelText={labelText}
      registerText={arr.registerText}
    />
  ));
};
