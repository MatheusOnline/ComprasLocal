import { DefaultTemplate } from "../../Template/DefaultTemplate"
import {Text} from "@components/UI/Text/Text"  
import { BenefitsBar } from "../../Components/Layout/BenefitsBar/BenefitsBar"
import { CatalogProducts } from "@components/Layout/CatalogProducts"
import { Carrosel } from "../../Components/Features/Carrosel/Index"
import {CategoryBar} from "../../Components/Layout/CategoryBar/CategoryBar"

import { useProductData } from "../../hooks/useProductsData"


export const Home = () => {
    const { data, isLoading } = useProductData()
    return(
        <DefaultTemplate    >
            <Carrosel />
            <BenefitsBar />
            
            <Text fontSize="large" color="primary" maxWidth="450px" underline={true}>
                Principais Categorias
            </Text>
            <CategoryBar />

            <Text fontSize="large" color="primary" maxWidth="450px" underline={true}>
                Explore Produtos
            </Text>
            <CatalogProducts isLoading={isLoading} products={data} />

        </DefaultTemplate>
    )
}