"use client";

import { TextFieldProps } from "@mui/material";
import { AluInput } from "./Input";

const AluInputNumber = (props: TextFieldProps) => {
  return (
    <AluInput
      {...props}
      label="Somente números"
      type="number"
      slotProps={{
        htmlInput: {
          inputMode: "numeric",
          pattern: "[0-9]*",
        },
      }}
    />
  );
};

export default AluInputNumber;
