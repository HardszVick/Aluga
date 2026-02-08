"use client";

import { TextField, TextFieldProps, styled } from "@mui/material";
import { ChangeEvent } from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      boxShadow: `0 0 0 4px ${theme.palette.primary.main}25`,
    },
  },
}));

export type AluInputProps = TextFieldProps & {
  onChangeValue?: (value: string) => void
}

export const AluInput = ({ onChangeValue, onChange, ...props }: AluInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    onChange?.(event);
    onChangeValue?.(event.target.value);
  }

  return (
    <StyledTextField
      {...props}
      onChange={e => handleChange(e)}
      slotProps={{
        input: {
          ...props.slotProps?.input,
        },
      }}
    />
  );
};
