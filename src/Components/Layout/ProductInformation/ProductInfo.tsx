import styled from "styled-components"
import { Flex } from "@components/UI/Flex"
import { Assessment } from "@components/UI/Assessment"
import { Text } from "@components/UI/Text"
import { Button } from "@components/UI/Button"
import { Stepper } from "@components/UI/Stepper"

import { capitalizeWords } from "../../../functions/capitalizeWords"
import { ProductPrice } from "./ProductPrice"
import { ProductInfoSkeleton } from "./ProductInfoSkeleton"
import type { ProductInformationProps } from "../../../types/types"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useAuth } from "../../../stores/useAuthStore"
import { useAddItemToCart } from "../../../service/cartService"
import { useCreateCheckoutDirect } from "../../../service/checkoutService"
type ProductInfoProps = {
    product: ProductInformationProps;
    isLoading: boolean
}


export const ProductInfo = ({ product, isLoading }: ProductInfoProps) => {
   
    const [value , setValue] = useState(1)
    const navigate = useNavigate();

    const user = useAuth((state) => state.user);
    const { mutate: addItem } = useAddItemToCart();
    const createCheckout = useCreateCheckoutDirect();

    if(isLoading){
        return(
            <ProductInfoSkeleton/>
        )
    }

    function AddCart(){
      
        
        if(!user){
            navigate("/auth/login")
            return
        }
        
        addItem(product.id)
    }

    function CreateCheckout(){
        createCheckout.mutateAsync(
        {
            
            product_id: product.id,
            quantity: value
        },{
            onSuccess: async (data) => {
    
                console.log(data)
                 navigate(`/payment/checkout/${data?.data?.checkoutId}`)
            },
            onError: (error: any)  => {
                console.log(error.response.data)
            }
        })

    }

    return(
        <ContainedInfo>
            <Flex flexDirection="column" gap="16px" >
                {/*Avaliaçao | Estoque | Marca */}
                <Flex gap="8px" justifyContent="space-between" >
                    <Assessment value={product?.assessment} />
                    <Text fontSize="small" color="secondary">|</Text>
                    <Text fontSize="small" color="secondary">Estoque: {product?.stock}</Text>
                    <Text fontSize="small" color="secondary">|</Text>
                    <Text fontSize="small" color="secondary">Codigo: {product?.code}</Text>
                </Flex>
                
                {/*Titulo | Descriçao */}
                <Flex flexDirection="column">
                    <Text fontSize="large" fontWeight="bold">{capitalizeWords(product?.title)}</Text>
                    <Text fontSize="normal" fontWeight="normal" color="secondary">{product?.description}</Text>
                </Flex>    

                {/*Preço | Desconto */}    
                <ProductPrice price={product.original_price} />

                {/*Comprar | Quantidade | Carrinho */}
                <Flex gap="26px" flexDirection="column" >
                    <Flex gap="8px" alignItems="center" >
                        <Stepper value={value} onIncrease={setValue} onDecrease={setValue} />
                        <Button variant="contained" palette="primary" fullWidth onclick={CreateCheckout}>Comprar agora</Button>
                    </Flex>
                    
                    <Button variant="outlined" palette="primary" onclick={ AddCart}>Adicionar ao carrinho</Button>
                </Flex>

                {/* Card da loja */}

            </Flex>
        </ContainedInfo>
    )
}

const ContainedInfo = styled.div`
    min-width: 40%;
    max-width: 50%;
    background-color: ${({ theme }) => theme.colors.background_color};
    
`