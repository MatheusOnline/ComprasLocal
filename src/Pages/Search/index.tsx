import { useSearchParams } from "react-router-dom";

import { DefaultTemplate } from "../../Template/DefaultTemplate";
import { useProductSearch } from "../../hooks/useProductsSearchData";
import { CatalogProducts } from "@components/Layout/CatalogProducts";
import { Filter } from "@components/UI/Filters";
import { Text } from "@components/UI/Text";

import { Flex } from "@components/UI/Flex";
const Search = () => {
    const [searchParams] = useSearchParams();

    const q = searchParams.get("q") || "";

    const { data, isLoading } = useProductSearch(q);
    console.log(data)

    const capitalize = (text: string) => {
        if (!text) return "";

        return text.charAt(0).toUpperCase() + text.slice(1);
    };
    

    return (
        <DefaultTemplate>
            <Flex flexDirection="column">
                <Flex><Text fontSize="large" fontWeight="normal">Resuntado para {capitalize(q)}</Text></Flex>
                <Text color="secondary" fontWeight="normal">{data.length} Produtos econtrado</Text>
            </Flex>   
            
            <CatalogProducts products={data} isLoading={isLoading}/>

        </DefaultTemplate>
    );
};

export default Search;