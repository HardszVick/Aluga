"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import { useState } from "react";
import { AluInput } from "./Input";

const AluPasswordInput = (props: TextFieldProps) => {
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

export default AluPasswordInput;
