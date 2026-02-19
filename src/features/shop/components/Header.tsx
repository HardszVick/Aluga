'use client'

import { AppBar, Box, Container, Stack } from "@mui/material";
import { AluShopSearchInput } from "./SearchInput";
import { AluShopShoppingCartButton } from "./ShoppingCartButton";
import { AluShopAuthLink } from "./AuthLink";
import { AluLogo } from "@/components/ui/brand/Logo";
import { AluShopAuthButton } from "./AuthButton";

export const AluShopHeader = () => {
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
                    justifyContent={'space-between'}
                    gap={2}
                    flexWrap="wrap"
                    sx={{ width: '100%' }}
                >
                    <AluLogo
                        fontSize={{ xs: 28, md: 32 }}
                    />

                    <Box sx={{
                        width: { xs: '100%', md: 'auto' },
                        order: { xs: 3, md: 0 },
                        flexGrow: 1
                    }}>
                        <AluShopSearchInput />
                    </Box>

                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        gap={2}
                        sx={{ 
                            ml: 'auto', 
                            order: { xs: 2, md: 0 } 
                        }}
                    >
                        <AluShopShoppingCartButton />

                        <Box display={{ xs: 'none', md: 'block' }}>
                            <AluShopAuthLink />
                        </Box>

                        <Box display={{ xs: 'block', md: 'none' }}>
                            <AluShopAuthButton />
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </AppBar>
    )
}

