
import { BenefitsBar } from "../../Components/Layout/BenefitsBar/BenefitsBar"
import { DefaultTemplate } from "../../Template/DefaultTemplate"

import { ProductCatalog } from "../../Components/Layout/ProductCatalog/ProductCatalog"
export const Home = () => {
    return(
        <DefaultTemplate    >
            <BenefitsBar />
            <ProductCatalog />
        </DefaultTemplate>
    )
}