import { Container } from "@mui/material";
import { AluShopHeader } from "./_components/Header";

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