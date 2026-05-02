import styled from "styled-components"
import { Button } from "../../UI/Button"
import { Flex } from "../../UI/Flex"
import { Text } from "../../UI/Text"
import { Like } from "../../UI/Like/Like"
import { Assessment } from "../../UI/Assessment/Assessment"

import shoppingCart from "./../../../Assets/icons/shoppingCart.svg"
import testImgProductCard from "./imgtest.png"

type props = {
    ratting: number;
    price: number;
    title: string;
    store: string;
    imgSrc: string;    

}


export function ProductCard({ ratting, price, title, store, imgSrc }: props) {
    return(
        <Button palette="neutral" variant="outlined"maxHeight="300px" maxWidth="200px">
            <Flex flexDirection="column"  gap="5px" alignItems="center">
                
                <Flex fullWidth={true} justifyContent="space-between"><Like /> <Text fontWeight="normal" fontSize="small" color="secondary">id: 123456789</Text></Flex>
                
                <Img src={imgSrc} alt="Product" />
                
                <Flex flexDirection="column" fullWidth={true} alignItems="start" >
                    <Text fontWeight="normal" fontSize="normal">{title}</Text>
                    <Text fontWeight="normal" fontSize="small" color="secondary">{store}</Text>
                    <Assessment percentage={ratting} />
                </Flex>
                
                <Flex fullWidth={true} justifyContent="space-between" alignItems="end">
                    <Text fontWeight="bold" fontSize="medium">R${price.toFixed(2)}</Text>
                    <Button variant="contained" palette="primary" icon={true}><img src={shoppingCart} alt="" /></Button>
                </Flex>
            </Flex>
        </Button>
    )
}





const Img = styled.img`
    width: 75%;
`