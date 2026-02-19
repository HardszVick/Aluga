import { TextField, TextFieldProps } from "@mui/material";
import { Controller, ControllerProps } from "react-hook-form";
import { useAluFormController } from "../context/FormController";

export type AluInputProps = TextFieldProps & Omit<ControllerProps, 'render' | 'control'>

export const AluInput = ({ name, ...props }: AluInputProps) => {
  const { control } = useAluFormController();
  
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          error={!!error}
          helperText={error?.message}
          {...props}
        />
      )}
    />
  );
};
