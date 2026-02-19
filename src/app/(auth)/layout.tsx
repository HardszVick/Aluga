'use client'

import { Box, Container, Grid } from "@mui/material";
import { AluAuthHero } from "@/features/auth/components/Hero";
import { AluAuthHeader } from "@/features/auth/components/Header";

type AluAuthLayoutProps = {
    children: React.ReactNode
}

const AluAuthLayout = ({ children }: AluAuthLayoutProps) => {
    return (
        <>
            <AluAuthHeader />

            <Box
                component="main"
                sx={({ palette }) => ({
                    background: palette.primary.gradient,
                    width: '100%',
                    flex: 1
                })}
            >
                <Container sx={{ height: '100%' }}>
                    <Grid
                        sx={{ height: '100%' }}
                        container
                        spacing={2}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Grid
                            size="grow"
                            sx={{
                                display: { xs: 'none', md: 'block' }
                            }}
                        >
                            <AluAuthHero />
                        </Grid>

                        <Grid
                            size={{ xs: 'grow', md: 5 }}
                            justifyContent={{ xs: 'center', md: 'flex-end'}}
                            display={'flex'}
                        >
                            {children}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default AluAuthLayout;