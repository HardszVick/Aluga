"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { AluInput, AluInputProps } from "./Input";

export const AluPasswordInput = (props: AluInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AluInput
      {...props}
      type={showPassword ? "text" : "password"}
      fullWidth
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};