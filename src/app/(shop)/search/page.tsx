import { AluSearchProductsList } from "./_components/ProductsList";

type SearchParams = Promise<{ keyword?: string; }>;

type AluSearchProps = {
    searchParams: SearchParams
}

const AluSearch = async ({ searchParams }: AluSearchProps) => {
    const { keyword } = await searchParams;

    return (
        <AluSearchProductsList keyword={keyword} />
    )
}

export default AluSearch;