import { Link, Typography } from "@mui/material"

export const AluLogo = () => {
    return (
        <Link
            href="/"
            underline="none"
            sx={{ display: 'inline-block' }}
        >
            <Typography 
                variant="h4" 
                color="primary.main" 
                fontFamily="var(--font-logo)" 
                fontWeight='900'
            >
                Aluga Fácil
            </Typography>
        </Link>
    )
}