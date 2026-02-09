import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteColor {
        gradient?: string;
    }
    interface SimplePaletteColorOptions {
        gradient?: string;
    }
}