import { DefaultTemplate } from "../../Template/DefaultTemplate"
import {useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Breadcrumbs } from "../../Components/UI/Breadcrumb"
import {ImagePreview} from "../../Components/Features/ImagePreview"
import { Flex } from "../../Components/UI/Flex"
import { Assessment } from "@components/UI/Assessment"
import { Text } from "@components/UI/Text"
import { Button } from "@components/UI/Button"
import { Stepper } from "@components/UI/Stepper"
import { Accordion } from "@components/UI/Accordion"
import { ScrollToTop } from "@components/UI/ScrollToTop"
import styled from "styled-components"

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
            <Breadcrumbs category={category || ''} name={slug || ''} />
            <Flex gap="62px" >
                <ImagePreview images={product?.images || []} />
                <ContainedInfo>
                <Flex flexDirection="column" gap="16px" >
                    <Flex gap="8px" justifyContent="space-between" >
                        <Assessment value={product?.rating} />
                        <Text fontSize="small" color="secondary">|</Text>
                        <Text fontSize="small" color="secondary">Estoque: {product?.stock}</Text>
                        <Text fontSize="small" color="secondary">|</Text>
                        <Text fontSize="small" color="secondary">Marca: {product?.brand}</Text>
                    </Flex>
                    <Text fontSize="large" fontWeight="bold">{product?.title}</Text>
                    <Text fontSize="normal">{product?.description}</Text>
                    <Text fontSize="large" fontWeight="semi-bold">R${product?.price.toFixed(2)}</Text>
                    
                    <Flex gap="26px" flexDirection="column" >
                        <Flex gap="8px" alignItems="center" >
                            <Stepper />
                            <Button variant="contained" palette="secondary" fullWidth>Comprar agora</Button>
                        </Flex>
                        
                        <Button variant="outlined" palette="primary">Adicionar ao carrinho</Button>
                    </Flex>
                </Flex>
                </ContainedInfo>
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


const ContainedInfo = styled.div`
    max-width: 500px;
    border: 1px solid #FFFFFF;
`

