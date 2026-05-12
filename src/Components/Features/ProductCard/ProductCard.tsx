import styled from "styled-components"
import { Button } from "../../UI/Button"
import { Flex } from "../../UI/Flex"
import { Text } from "../../UI/Text"
import { Like } from "../../UI/Like/Like"
import { Assessment } from "../../UI/Assessment/Assessment"

import shoppingCart from "./../../../Assets/icons/shoppingCart.svg"


type props = {
    ratting: number;
    price: number;
    title: string;
    store: string;
    imgSrc: string;    

}


export function ProductCard({ ratting, price, title, store, imgSrc }: props) {
    return(
        <CardStyled>
            <Flex flexDirection="column"  gap="5px" alignItems="center">
                
                <Flex fullWidth={true} justifyContent="space-between" alignItems="center">
                    <Like /> 
                    <Text fontWeight="semi-bold" fontSize="extra-small" color="secondary">#123456789</Text>
                </Flex>
                
                <Img src={imgSrc} alt="Product" />
                
                <Flex flexDirection="column" fullWidth={true} alignItems="start" >
                    <Assessment percentage={ratting} />
                    <Text fontWeight="normal" fontSize="normal">{title}</Text>
                    <Text fontWeight="normal" fontSize="small" color="secondary">{store}</Text>
                </Flex>
                
                <Flex fullWidth={true} justifyContent="space-between" alignItems="end">
                    <Text fontWeight="bold" fontSize="medium">R${price.toFixed(2)}</Text>
                    <Button variant="contained" palette="primary" icon={true}><img src={shoppingCart} alt="" /></Button>
                </Flex>
            </Flex>
        </CardStyled>
    )
}




const CardStyled = styled.button`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background_color};
    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
    border-radius: 8px;
    padding: 12px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    transition: 0.3s ease;
    &:hover {

        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`

const Img = styled.img`
    width: 75%;
`