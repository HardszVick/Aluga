import { AluLogo } from "@/components/ui/brand/Logo";
import { AppBar, Container, Stack } from "@mui/material";

export const AluAuthHeader = () => {
    return (
        <AppBar
            position="sticky"
            sx={{
                background: 'none',
                paddingY: 1,
                boxShadow: '0 2px 12px -2px hsl(20 10% 15% / .08)'
            }}
        >
            <Container
                sx={{
                    background: 'hsl(0 0% 100%)'
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={2}
                >
                    <AluLogo />
                </Stack>
            </Container>
        </AppBar>
    )
}

