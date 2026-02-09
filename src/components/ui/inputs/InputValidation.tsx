import { AluInput, AluInputProps } from "./Input";

type props = AluInputProps & { validation: boolean };
const InputValidation = (props: props) => {
  return <AluInput {...props} />;
};

export default InputValidation;
