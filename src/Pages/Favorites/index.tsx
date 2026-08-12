import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { Breadcrumbs } from "@components/UI/Breadcrumb"
import { CatalogProducts } from "@components/Layout/CatalogProducts"
import { ScrollToTop } from "@components/UI/ScrollToTop"


import { useGetLikes } from "../../service/likeService"
const Favorites = () => {
    const {data, isLoading} = useGetLikes()
    
    return(
        <DefaultTemplate>
            <ScrollToTop/>
            <Breadcrumbs isLoading={isLoading} label="Favoritos"/>
            <CatalogProducts products={data?.data?.products} isLoading={isLoading} /> 
                   
        </DefaultTemplate>

    )
} 

export default Favorites