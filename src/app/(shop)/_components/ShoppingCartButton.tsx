import { ShoppingCart } from "@mui/icons-material"
import { IconButton } from "@mui/material"

export const AluShopShoppingCartButton = () => {
    return (
        <IconButton
            color="primary"
            sx={({ palette }) => ({
                background: 'hsl(30 100% 91%)',
                transition: 'transform 0.2s, filter 0.2s',
                '&:hover': {
                    filter: 'brightness(1.1)',
                    transform: 'scale(1.05)',
                    background: palette.primary.main,
                    color: '#fff'
                },
                '&:active': {
                    transform: 'scale(0.95)',
                    background: palette.primary.main,
                    color: '#fff'
                }
            })}
        >
            <ShoppingCart />
        </IconButton>
    )
}