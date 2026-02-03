"use client";

import { TextField, TextFieldProps, styled } from "@mui/material";

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

export const AluInput = (props: TextFieldProps) => {
  return (
    <StyledTextField
      {...props}
      slotProps={{
        input: {
          ...props.slotProps?.input,
        },
      }}
    />
  );
};
