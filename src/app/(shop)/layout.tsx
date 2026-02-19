import { AluShopHeader } from "@/features/shop/components/Header";
import { Container } from "@mui/material";

type AluShopLayoutProps = {
    children: React.ReactNode
}

const AluShopLayout = ({ children }: AluShopLayoutProps) => {
    return (
        <>
            <AluShopHeader />

            <Container component="main">
                {children}
            </Container>
        </>
    )
}

export default AluShopLayout;