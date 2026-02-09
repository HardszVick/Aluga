import NextLink from "next/link"
import { Divider, Link, Stack } from "@mui/material"

export const AluShopAuthLink = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{
                p: 0.5,
                '& a': { textDecoration: 'none', transition: '0.2s' }
            }}
        >
            <Link
                component={NextLink}
                href="/login"
                sx={{
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    '&:hover': { color: 'primary.main' }
                }}
            >
                Entre
            </Link>

            <Divider orientation="vertical" variant="middle" flexItem sx={{ my: 1 }} />

            <Link
                component={NextLink}
                href="/register"
                sx={({ palette }) => ({
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    background: palette.primary.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    '&:hover': {
                        filter: 'brightness(1.2)',
                        transform: 'translateY(-1px)'
                    }
                })}
            >
                Cadastre-se
            </Link>
        </Stack>
    )
}