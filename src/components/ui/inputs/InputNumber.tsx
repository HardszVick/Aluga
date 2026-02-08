"use client";

import { AluInput, AluInputProps } from "./Input";

export const AluInputNumber = (props: AluInputProps) => {
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