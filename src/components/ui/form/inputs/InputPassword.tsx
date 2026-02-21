"use client";

import { VisibilityOutlined, VisibilityOffOutlined, LockOutline } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { AluInput, AluInputProps } from "./Input";

export const AluPasswordInput = (props: AluInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AluInput
      type={showPassword ? "text" : "password"}
      placeholder="Senha"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <LockOutline />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};