import styled from "styled-components"
import { Flex } from "@components/UI/Flex"
import { Text } from "@components/UI/Text"
import { Stepper } from "@components/UI/Stepper"
import { Button } from "@components/UI/Button"
import { BsFillTrash3Fill } from "react-icons/bs";
import type { CartItemProps } from "../../../types/types"
import { useState } from "react"
export const CartItemCard =({id, title, store, price, thumbnail, quantity}: CartItemProps) => {
    
    const [qnt, setQnt] = useState(quantity)
    return(
        <Container key={id}>
            
            <Imagen src={thumbnail} alt="" />

            <Flex flexDirection="column" gap="0.5rem" fullWidth={true} justifyContent="space-between">
                <Flex flexDirection="row" justifyContent="space-between" alignItems="center" fullWidth={true}>
                    <div>
                        <Text fontSize="medium" fontWeight="bold">{title}</Text>
                        <p>{store}</p>
                    </div>
                    <Text fontSize="medium" fontWeight="semi-bold">R${price}</Text>
                </Flex>
                <Flex flexDirection="row" alignItems="center" justifyContent="space-between" gap="1rem"fullWidth={true}>
                    <Stepper value={qnt} onChange={setQnt}/>
                    <Button palette="danger" variant="contained" icon={true}><BsFillTrash3Fill size={18}/></Button>
                </Flex>
            </Flex>  
            
        </Container>
    )
}

const Imagen = styled.img`
    max-width: 130px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 12px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    gap: 10px;
    width: 100%;
`
