import { DefaultTemplate } from "../../Template/DefaultTemplate"
import {useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Flex } from "../../Components/UI/Flex"
import { Text } from "@components/UI/Text"
import { Accordion } from "@components/UI/Accordion"
import { ScrollToTop } from "@components/UI/ScrollToTop"

import { Breadcrumbs } from "../../Components/UI/Breadcrumb"
import { BreadcrumbsSkeleton } from "@components/UI/Breadcrumb/BreadcrumbsSkeleton"
import {ImagePreview} from "../../Components/Features/ImagePreview"
import { ImagePreviewSkeleton } from "@components/Features/ImagePreview/ImagePreviewSkeleton"
import { ProductInfo } from "@components/Features/ProductInfo"
import { ProductInfoSkeleton } from "@components/Features/ProductInfo/ProductInfoSkeleton"





const ProductPage = () =>{
    const { category, slug, id } = useParams();    
    const [product, setProduct] = useState<any>(null);

    
    useEffect(() => {

        console.log("ID:", id);

        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("Fetched Product:", data);

                setProduct(data);
            });

    }, [id]);
    
    

    return(
        <DefaultTemplate>
            <ScrollToTop/>
            {product ? (
                <Breadcrumbs category={category || ''} name={slug || ''} />

            ) : (
                <BreadcrumbsSkeleton/>
            )}
            <Flex gap="62px" >
                {/* Imagems do produto */}
                {product ? (
                    <ImagePreview images={product?.images} />
                ) : (
                    <ImagePreviewSkeleton />
                )}

                {/* Informacoes produto */}
                {product ? (
                    <ProductInfo product={product} />
                ) : (
                    <ProductInfoSkeleton />
                )}
            </Flex>
            <Accordion title="Detalhes do produto">
                <Text fontSize="small" color="secondary">
                    {product?.description}
                </Text>
            </Accordion>
        </DefaultTemplate>
    )
}


export default ProductPage




