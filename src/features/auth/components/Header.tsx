import { AluLogo } from "@/components/ui/brand/Logo";
import { AppBar, Container, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export const AluAuthHeader = () => {
    const path = usePathname();

    return (
        <AppBar
            position="sticky"
            sx={{
                background: 'hsl(0 0% 100%)',
                paddingY: 1,
                boxShadow: '0 2px 12px -2px hsl(20 10% 15% / .08)'
            }}
        >
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                >
                    <AluLogo 
                        fontSize={{ xs: 28, md: 32 }}
                    />
                    
                    <Typography variant="h5" fontWeight={'600'}>
                        {path === '/login' ? 'Entrar' : 'Criar conta'}
                    </Typography>
                </Stack>
            </Container>
        </AppBar>
    )
}

