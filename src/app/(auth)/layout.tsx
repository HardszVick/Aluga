import { Container } from "@mui/material";
import { AluAuthHeader } from "./_components/Header";

type AluAuthLayoutProps = {
    children: React.ReactNode
}

const AluAuthLayout = ({ children }: AluAuthLayoutProps) => {
    return (
        <>
            <AluAuthHeader />

            <Container component="main">
                {children}
            </Container>
        </>
    );
}

export default AluAuthLayout;