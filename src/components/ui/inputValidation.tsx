import { TextFieldProps } from "@mui/material";
import { AluInput } from "./Input";

type props = TextFieldProps & { validation: boolean };
const InputValidation = (props: props) => {
  return <AluInput {...props} />;
};

export default InputValidation;
