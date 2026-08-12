import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { DefaultTemplate } from "../../Template/DefaultTemplate";
import { CatalogProducts } from "@components/Layout/CatalogProducts";

import { FiltersMenu } from "@components/Layout/FiltersBar";
import { Text } from "@components/UI/Text";
import { Breadcrumbs } from "@components/UI/Breadcrumb";
import { Flex } from "@components/UI/Flex";
import { ScrollToTop } from "@components/UI/ScrollToTop";

import { useList } from "../../service/productsService";

const Search = () => {
    const [searchParams] = useSearchParams();

    const q = searchParams.get("q") || "";

    const { data, isLoading } = useList({search: q});
    
    const capitalize = (text: string) => {
        if (!text) return "";

        return text.charAt(0).toUpperCase() + text.slice(1);
    };
    

    const filteredData = useMemo(() => {
        if (!data) return []

        let result = data?.data?.products

        return result
    }, [data, searchParams])


    return (
        <DefaultTemplate>
            <ScrollToTop/>
            <Breadcrumbs label={q} isLoading={false}/>     
                <Flex flexDirection="column" fullWidth={true} gap="10px">
                    <Flex flexDirection="row" gap="100px" justifyContent="space-between">
                        <Flex flexDirection="column">
                            <Flex><Text fontSize="large" fontWeight="normal">Resuntado para {capitalize(q)}</Text></Flex>
                            <Text color="secondary" fontWeight="normal">{filteredData.length} Produtos econtrado</Text>
                        </Flex>
                        <FiltersMenu/>

                    </Flex>   
                    
                    <CatalogProducts products={filteredData} isLoading={isLoading}/>

                    
                </Flex>
        </DefaultTemplate>
    );
};

export default Search;