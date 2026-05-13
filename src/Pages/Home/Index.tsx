import { DefaultTemplate } from "../../Template/DefaultTemplate"

import {Text} from "@components/UI/Text/Text"  

import { BenefitsBar } from "../../Components/Layout/BenefitsBar/BenefitsBar"
import { ProductCatalog } from "../../Components/Layout/ProductCatalog/ProductCatalog"
import { Carrosel } from "../../Components/Features/Carrosel/Index"

import {CategoryBar} from "../../Components/Layout/CategoryBar/CategoryBar"
export const Home = () => {
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
            <ProductCatalog />

        </DefaultTemplate>
    )
}