import styled from "styled-components"
import { Button } from "../../UI/Button"
import { Flex } from "../../UI/Flex"
import { Text } from "../../UI/Text"
import { Like } from "../../UI/Like/Like"
import { Assessment } from "../../UI/Assessment/Assessment"

import CartIcon from "./../../../Assets/Svgs/CartNormal.svg"


import { useNavigate } from "react-router-dom"


type props = {
    ratting: number;
    price: number;
    title: string;
    store: string;
    imgSrc: string;    
    id: string;
    category?: string;
}

function createSlug(text: string) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}


export function ProductCard({ ratting, price, title, store, imgSrc, id, category }: props) {
    const navigate = useNavigate()

    return(
        <CardStyled onClick={() => navigate(`/product/${category}/${createSlug(title)}/${id}`)}>
            <Flex flexDirection="column"  gap="5px" alignItems="center">
                
                <Flex fullWidth={true} justifyContent="space-between" alignItems="center">
                    <Like /> 
                    <Text fontWeight="semi-bold" fontSize="extra-small" color="secondary">#123456789</Text>
                </Flex>
                <ImageFrame>
                    <Img src={imgSrc} alt="Product" />
                </ImageFrame>
                <Flex flexDirection="column" fullWidth={true} alignItems="start" >
                    <Assessment value={ratting} />
                    <Info>
                        <Text fontWeight="semi-bold" fontSize="normal" >{title}</Text>
                        <Text fontWeight="normal" fontSize="extra-small" color="secondary">{store}</Text>
                    </Info>
                </Flex>
                
                <Flex fullWidth={true} justifyContent="space-between" alignItems="end">
                    <Text fontWeight="semi-bold" fontSize="medium">R${price.toFixed(2)}</Text>
                    <Button variant="contained" palette="primary" icon={true}><img src={CartIcon} alt="" /></Button>
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
    box-sizing: border-box;
    transition: 0.3s ease;
    &:hover {

        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`

const ImageFrame = styled.div`
    width: 100%;
    height: 140px; /* ou o tamanho que quiser */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 100%;
    text-align: start;

    p{
        white-space: nowrap;
        overflow: hidden;   
        text-overflow: ellipsis;
       
    }
`