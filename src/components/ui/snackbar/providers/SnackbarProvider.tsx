'use client';

import { SnackbarProvider } from 'notistack';

export const AluSnackbarProvider = ({ children }: { children: React.ReactNode }) => {    
    return (
        <SnackbarProvider>
            {children}
        </SnackbarProvider>
    );
}