'use client'

import NextLink from "next/link";
import { Link } from "@mui/material";

const AluLogin = () => {
    return (
        <Link
            component={NextLink}
            href='/register'
        >
            Clique aqui caso não possua cadastro
        </Link>
    );
}

export default AluLogin;