import styled from "styled-components"
import { Flex } from "@components/UI/Flex"
import { Button } from "@components/UI/Button"
//import { Text } from "@components/UI/Text"
import { Line } from "@components/UI/Line"
import { Text } from "@components/UI/Text"
import { CartSummarySkeleton } from "./CartSummarySkeleton"
import { useNavigate } from "react-router-dom"


type CartSummartProps = {
    isLoading: boolean
    isEnabled?: boolean
    redirect: string


    subtotal: number
    total: number
}

export const CartSummary = ({isLoading, isEnabled,redirect , subtotal, total}:CartSummartProps) => {
    const navigate = useNavigate()
    if(isLoading){
        return(
            <CartSummarySkeleton/>
        )
    }

    return(
        <ContainerStyled>
            <Text fontSize="large" fontWeight="semi-bold">Resumo do pedido</Text>
            <Flex gap="10px" flexDirection="column">
                <Flex flexDirection="row" justifyContent="space-between">
                    <p>Subtotal</p>
                    <p>R${subtotal || "00,00"}</p>
                </Flex>
                <Flex flexDirection="row" justifyContent="space-between">
                    <p>Taxa de entrega</p>
                    <p>R$00,00</p>
                </Flex>
                <Flex flexDirection="row" justifyContent="space-between">
                    <p>Descontos</p>
                    <p>R$00,00</p>
                </Flex>
                <Line />
                <Flex flexDirection="row" justifyContent="space-between">
                    <p>Total</p>
                    <p>R${total || "00,00"}</p>
                </Flex>
                <Button disabled={isEnabled} fullWidth={true} variant="contained" palette="primary" onclick={() => {navigate(redirect)}}>Finalizar Compra</Button>
            </Flex>
        </ContainerStyled>
    )
}


const ContainerStyled = styled.div`
    width: 50%;
    max-height: 250px   ;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`