import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { Breadcrumbs } from "@components/UI/Breadcrumb"
import { CatalogProducts } from "@components/Layout/CatalogProducts"
import { ScrollToTop } from "@components/UI/ScrollToTop"
import { useProductFavoriteData } from "../../hooks/useProductsFavoriteData"

const Favorites = () => {
    const {data, isLoading} = useProductFavoriteData()
    
    return(
        <DefaultTemplate>
            <ScrollToTop/>
            <Breadcrumbs isLoading={isLoading} label="Favoritos"/>
            <CatalogProducts products={data} isLoading={isLoading} /> 
                   
        </DefaultTemplate>

    )
} 

export default Favorites