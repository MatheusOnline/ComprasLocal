import { DefaultTemplate } from "../../Template/DefaultTemplate"

import { BenefitsBar } from "../../Components/Layout/BenefitsBar/BenefitsBar"
import { ProductCatalog } from "../../Components/Layout/ProductCatalog/ProductCatalog"
import { Carrosel } from "../../Components/Features/Carrosel/Index"

export const Home = () => {
    return(
        <DefaultTemplate    >
            <Carrosel />
            <BenefitsBar />
            <ProductCatalog />
            
        </DefaultTemplate>
    )
}