'use client'

import NextLink from "next/link";
import { Link } from "@mui/material";

const AluRegister = () => {
    return (
        <Link
            component={NextLink}
            href='/login'
        >
            Clique aqui caso possua cadastro
        </Link>
    );
}

export default AluRegister;