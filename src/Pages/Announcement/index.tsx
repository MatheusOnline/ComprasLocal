import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { useParams } from "react-router-dom"

import { Flex } from "../../Components/UI/Flex"
import { Text } from "@components/UI/Text"
import { Accordion } from "@components/UI/Accordion"
import { ScrollToTop } from "@components/UI/ScrollToTop"
import { Breadcrumbs } from "../../Components/UI/Breadcrumb"
import { ProductInfo } from "@components/Layout/ProductInformation"
import { ImagePreview } from "../../Components/Features/ImagePreview"

import { useGet } from "../../service/productsService"





const ProductPage = () =>{
    const {  slug, id } = useParams();    
    const {data, isLoading } = useGet(String(id))
    
    const paths = [
        String(data?.data?.category)
    ]
    
    return(
        <DefaultTemplate>
            <ScrollToTop/> 
            
            <Breadcrumbs isLoading={isLoading} path={paths || ''} label={slug || ''} />
            
            <Flex gap="62px" >
                {/* Imagems do produto */}
                <ImagePreview isLoading={isLoading} images={data?.data?.images} />
                
                {/* Informacoes produto */}
                <ProductInfo isLoading={isLoading} product={data?.data} />
                                 
            </Flex>
            <Accordion title="Detalhes do produto">
                <Text fontSize="small" color="secondary">
                    {data?.data?.description}
                </Text>
            </Accordion>
        </DefaultTemplate>
    )
}


export default ProductPage




