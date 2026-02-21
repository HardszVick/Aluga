import { Link, Typography, TypographyProps } from "@mui/material"

export const AluLogo = ({ ...props }: TypographyProps) => {
    return (
        <Link
            href="/"
            underline="none"
            sx={{ display: 'inline-block' }}
        >
            <Typography 
                variant="h4"
                color="primary.main" 
                fontWeight='900'
                {...props}
            >
                Aluga Fácil
            </Typography>
        </Link>
    )
}