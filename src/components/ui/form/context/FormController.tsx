import { createContext, useContext, ReactNode } from "react";
import { Control, FieldValues } from "react-hook-form";

interface AluFormContextData<T extends FieldValues = any> {
    control: Control<T>;
}

const AluFormControllerContext = createContext<AluFormContextData | undefined>(undefined);

interface AluFormControllerProps<T extends FieldValues> {
    control: Control<T>;
    children: ReactNode;
}

export const AluFormControllerProvider = <T extends FieldValues>({
    control,
    children
}: AluFormControllerProps<T>) => {
    return (
        <AluFormControllerContext.Provider value={{ control }}>
            {children}
        </AluFormControllerContext.Provider>
    );
};

export const useAluFormController = () => {
    const context = useContext(AluFormControllerContext);
    
    if (!context) {
        throw new Error("useAluFormController deve ser usado dentro de um AluFormControllerProvider");
    }

    return context;
};