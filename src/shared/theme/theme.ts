'use client';

import { createTheme } from '@mui/material/styles';

const brandColors = {
    primaryMain: 'hsl(24, 95%, 53%)',
    primaryGradient: 'linear-gradient(135deg, hsl(24, 95%, 53%) 0%, hsl(340, 82%, 55%) 100%)',
    secondaryMain: 'hsl(340, 82%, 55%)',
};

export const aluTheme = createTheme({
    palette: {
        primary: {
            main: brandColors.primaryMain,
            gradient: brandColors.primaryGradient
        },
        secondary: {
            main: brandColors.secondaryMain
        },
    },
    typography: {
        fontFamily: 'var(--font-logo), roboto, sans-serif',
        button: {
            textTransform: 'none'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'hover',
            },
        },
        MuiButton: {
            defaultProps: {
                fullWidth: true
            },
            styleOverrides: {
                root: {
                    height: '46px',
                    borderRadius: '14px'
                },
            },
            variants: [{
                props: { color: 'gradient' },
                style: {
                    background: brandColors.primaryGradient,
                    color: '#fff',
                    fontWeight: 700
                },
            }, {
                props: { variant: 'outlinedBranded' },
                style: ({ theme, ownerState }: any) => {
                    const activeColor = theme.palette[ownerState.color || 'primary'].main;

                    return {
                        backgroundColor: '#fbfaf9',
                        color: theme.palette.text.primary,
                        border: '1px solid #ebe6e0',
                        textTransform: 'none',
                        fontWeight: 700,
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                            backgroundColor: activeColor,
                            borderColor: activeColor,
                            color: '#ffffff',
                        }
                    };
                },
            },]
        },
        MuiInputAdornment: {
            styleOverrides: {
                root: {
                    marginRight: 0
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    transition: theme.transitions.create(["border-color", "box-shadow"]),
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: brandColors.primaryMain, 
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ebe6e0',
                        borderWidth: '1px',
                    },
                    borderRadius: '14px',
                    height: '46px',
                    backgroundColor: '#fbfaf9'
                }),
                input: {
                    padding: '0px 15px',
                    '&::placeholder': {
                        fontWeight: 600,
                    },
                },
            },
        },
    },
});