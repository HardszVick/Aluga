import { Box, Typography } from "@mui/material"

export const AluAuthHero = () => {
    return (
        <Box>
            <Typography
                color="#fff"
                variant="h4"
                fontWeight='900'
                marginBottom={4}
            >
                A plataforma #1 de <br />
                aluguel de equipamentos <br />
                do Brasil
            </Typography>

            <Typography
                color="#ffffff"
                variant="h6"
                sx={{
                    opacity: 0.9
                }}
            >
                Alugue o que precisar, quando precisar. De furadeiras <br />
                a geradores, tudo em um só lugar.
            </Typography>
        </Box>
    )
}