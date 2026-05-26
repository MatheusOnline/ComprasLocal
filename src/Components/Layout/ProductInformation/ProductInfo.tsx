import styled from "styled-components"
import { Flex } from "@components/UI/Flex"
import { Assessment } from "@components/UI/Assessment"
import { Text } from "@components/UI/Text"
import { Button } from "@components/UI/Button"
import { Stepper } from "@components/UI/Stepper"
import { useCart } from "../../../hooks/useCart"
import { ShopCard } from "../../Features/ShopCard"
import { ProductPrice } from "./ProductPrice"
import { ProductInfoSkeleton } from "./ProductInfoSkeleton"
import type { ProductInformationProps } from "../../../types/types"


type ProductInfoProps = {
    product: ProductInformationProps;
    isLoading: boolean
}


export const ProductInfo = ({ product, isLoading }: ProductInfoProps) => {
    const cart = useCart()

    if(isLoading){
        return(
            <ProductInfoSkeleton/>
        )
    }

    return(
        <ContainedInfo>
            <Flex flexDirection="column" gap="16px" >
                {/*Avaliaçao | Estoque | Marca */}
                <Flex gap="8px" justifyContent="space-between" >
                    <Assessment value={product?.rating} />
                    <Text fontSize="small" color="secondary">|</Text>
                    <Text fontSize="small" color="secondary">Estoque: {product?.stock}</Text>
                    <Text fontSize="small" color="secondary">|</Text>
                    <Text fontSize="small" color="secondary">Marca: {product?.brand}</Text>
                </Flex>
                
                {/*Titulo | Descriçao */}
                <Flex flexDirection="column">
                    <Text fontSize="large" fontWeight="bold">{product?.title}</Text>
                    <Text fontSize="normal" fontWeight="normal" color="secondary">{product?.description}</Text>
                </Flex>    

                {/*Preço | Desconto */}    
                <ProductPrice price={product.price} descount={product.discountPercentage}/>

                {/*Comprar | Quantidade | Carrinho */}
                <Flex gap="26px" flexDirection="column" >
                    <Flex gap="8px" alignItems="center" >
                        <Stepper />
                        <Button variant="contained" palette="primary" fullWidth>Comprar agora</Button>
                    </Flex>
                    
                    <Button variant="outlined" palette="primary" onclick={() => cart.addItem(2)}>Adicionar ao carrinho</Button>
                </Flex>

                {/* Card da loja */}
                <ShopCard id={1} img="https://placehold.co/80" name="AmorAmo" sales={200}/>
            </Flex>
        </ContainedInfo>
    )
}

const ContainedInfo = styled.div`
    max-width: 500px;
    
    background-color: ${({ theme }) => theme.colors.background_color};
    
`