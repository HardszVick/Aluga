"use client";

import { AluInput, AluInputProps } from "./Input";

export const AluInputNumber = (props: AluInputProps) => {
  return (
    <AluInput
      placeholder="Somente números"
      type="number"
      slotProps={{
        htmlInput: {
          inputMode: "numeric",
          pattern: "[0-9]*",
        },
      }}
      {...props}
    />
  );
};