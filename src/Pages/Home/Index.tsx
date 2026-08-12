import { DefaultTemplate } from "../../Template/DefaultTemplate"
import {Text} from "@components/UI/Text/Text"  
import { BenefitsBar } from "../../Components/Layout/BenefitsBar/BenefitsBar"
import { CatalogProducts } from "@components/Layout/CatalogProducts"
import { CatalogBanners } from "@components/Features/BannersCatalog/CatalogBanners"
import {CategoryBar} from "../../Components/Layout/CategoryBar/CategoryBar"

import { useList } from "../../service/productsService"


export const Home = () => {
    const { data, isLoading } = useList({})
    
    return(
        <DefaultTemplate    >
            <CatalogBanners />
            <BenefitsBar />
            
            
            <CategoryBar />

            <Text fontSize="large" color="primary" maxWidth="450px" underline={true}>
                Explore Produtos
            </Text>
            <CatalogProducts isLoading={isLoading} products={data?.data?.products} />

        </DefaultTemplate>
    )
}