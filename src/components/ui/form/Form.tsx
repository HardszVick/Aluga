import { Box, BoxProps } from "@mui/material";
import { AluFormControllerProvider } from "./context/FormController";
import { Control, FieldValues } from "react-hook-form";

type AluFormProps<T extends FieldValues> = BoxProps<"form"> & {
    control: Control<T>
}

export const AluForm = <T extends FieldValues>({ children, control, ...props }: AluFormProps<T>) => {
    return (
        <Box
            sx={{ 
                width: '100%'
            }}
            component="form"
            {...props}
        >
            <AluFormControllerProvider control={control}>
                {children}
            </AluFormControllerProvider>
        </Box>
    );
};