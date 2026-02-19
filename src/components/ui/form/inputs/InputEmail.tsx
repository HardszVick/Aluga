"use client";

import { InputAdornment } from "@mui/material";
import { AluInput, AluInputProps } from "./Input";
import { MailOutline } from "@mui/icons-material";

export const AluEmailInput = (props: AluInputProps) => {
  return (
    <AluInput
      placeholder="E-mail"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <MailOutline />
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};