import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteColor {
        gradient?: string;
    }
    interface SimplePaletteColorOptions {
        gradient?: string;
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        gradient: true;
    }
    interface ButtonPropsVariantOverrides {
        outlinedBranded: true;
    }
}