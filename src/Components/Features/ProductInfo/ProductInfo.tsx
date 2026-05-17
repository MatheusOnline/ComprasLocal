import styled from "styled-components"
import { Flex } from "@components/UI/Flex"
import { Assessment } from "@components/UI/Assessment"
import { Text } from "@components/UI/Text"
import { Button } from "@components/UI/Button"
import { Stepper } from "@components/UI/Stepper"
import { useCart } from "../../../hooks/useCart"

type InfoProps = {
    rating: number;
    stock: number;
    brand: string;
    title: string;
    description: string;
    price: number;
    discountPercentage?: number;
}

type ProductInfoProps = {
    product: InfoProps;
}


export const ProductInfo = ({ product }: ProductInfoProps) => {
    const cart = useCart()

    return(
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
                                
                                {product?.discountPercentage ? (
                                    <Flex gap="6px" alignItems="end"  >
                                        <Text fontWeight="semi-bold" fontSize="large">R${(product?.price * (1 - product?.discountPercentage / 100)).toFixed(2)}</Text>
                                        <Text  fontWeight="normal" fontSize="medium" color="secondary" through={true}>R${product?.price.toFixed(2)}</Text>
                                    </Flex>
                                    ):(

                                <Text fontSize="large" fontWeight="semi-bold">R${product?.price.toFixed(2)}</Text>
                                )}
                                <Flex gap="26px" flexDirection="column" >
                                    <Flex gap="8px" alignItems="center" >
                                        <Stepper />
                                        <Button variant="contained" palette="secondary" fullWidth>Comprar agora</Button>
                                    </Flex>
                                    
                                    <Button variant="outlined" palette="primary" onclick={() => cart.addItem(2)}>Adicionar ao carrinho</Button>
                                </Flex>
                            </Flex>
                        </ContainedInfo>
    
    )
}

const ContainedInfo = styled.div`
    max-width: 500px;
    border: 1px solid #FFFFFF;
`