'use client';
import { createTheme } from '@mui/material/styles';

const brandColors = {
    primaryMain: 'hsl(24, 95%, 53%)',
    primaryGradient: 'linear-gradient(135deg, hsl(24, 95%, 53%) 0%, hsl(340, 82%, 55%) 100%)',
    secondaryMain: 'hsl(340, 82%, 55%)',
};

export const theme = createTheme({
    palette: {
        primary: {
            main: brandColors.primaryMain,
            gradient: brandColors.primaryGradient
        },
        secondary: {
           main: brandColors.secondaryMain
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    background: brandColors.primaryGradient,
                    '&:hover': { filter: 'brightness(1.1)', background: brandColors.primaryGradient },
                },
            },
        }
    },
});