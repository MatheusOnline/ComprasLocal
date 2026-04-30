
import { BenefitsBar } from "../../Components/Layout/BenefitsBar/BenefitsBar"
import { DefaultTemplate } from "../../Template/DefaultTemplate"

import { ProductCard } from "../../Components/Features/ProductCard/ProductCard"
export const Home = () => {
    return(
        <DefaultTemplate    >
            <BenefitsBar />
            <ProductCard />
        </DefaultTemplate>
    )
}