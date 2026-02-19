import { Typography } from "@mui/material"

type AluSearchProductsListProps = {
    keyword?: string;
}

export const AluSearchProductsList = ({ keyword }: AluSearchProductsListProps) => {
    return (
        <Typography>
            Produtos renderizados no servidor pela pesquisa: {keyword}
        </Typography>
    )
}