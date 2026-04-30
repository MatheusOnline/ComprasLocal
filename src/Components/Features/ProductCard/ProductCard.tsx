import styled from "styled-components"
import { Button } from "../../UI/Button"
import { Flex } from "../../UI/Flex"
import { Text } from "../../UI/Text"

import shoppingCart from "./../../../Assets/icons/shoppingCart.svg"
import testImgProductCard from "./imgtest.png"


export function ProductCard() {
    return(
        <ProductCardStyled>
            <Flex flexDirection="column" >
                <Flex fullWidth={true} justifyContent="space-between"><button></button> <Text fontWeight="normal" fontSize="small" color="secondary">id: 123456789</Text></Flex>
                <img src={testImgProductCard} alt="Product" />
                <Flex flexDirection="column" >
                    <Text fontWeight="bold" fontSize="medium">Apple iphone 15 pro</Text>
                    <Text fontWeight="normal" fontSize="small" color="secondary">Loja SmartCell</Text>
                    {/*Aqui vai as estrelas de avalição */}
                </Flex>
                <Flex fullWidth={true} justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold" fontSize="large">R$2199,90</Text>
                    <Button variant="contained" palette="primary" icon={true}><img src={shoppingCart} alt="" /></Button>
                </Flex>
            </Flex>
        </ProductCardStyled>
    )
}



const ProductCardStyled = styled.div`
    width: 300px;
    height: 400px;
    background-color: ${({ theme }) => theme.colors.neutro_color_100};
    border-radius: 8px;
    
`