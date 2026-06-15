import styled from "styled-components"
import { useState } from "react"
import { useForgotPasswordStore } from "../../../stores/forgotPasswordStore"

//COMPONENTES
import { Flex } from "@components/UI/Flex"
import { Button } from "@components/UI/Button"
import { Text } from "@components/UI/Text"
import { CodeInput } from "@components/UI/CodeInput/CodeInput"

const CodeStep = () => {
    const {backStep, nextStep, code, setCode, codeFunction} = useForgotPasswordStore()
    const [error, setError] = useState("")

    async function handleSubmit() {
        if(code){
            const result = await codeFunction(code)
            if(result?.success){
                nextStep()
            }else{
                setError("codigo invalido")
            }
        }
    }
    return(
        <>
            <Flex fullWidth justifyContent="center">
                <ContainerCard>
                    
                        <LinkText onClick={backStep}>Voltar</LinkText> 
                    
                    <Flex flexDirection="column" gap="4px" fullWidth alignItems="center" >
                        <Text fontSize="large">Digite o codigo</Text>
                        <Text fontSize="small" color="secondary">Insira o código enviado para o email </Text>
                        
                    </Flex>
                    
                    <Flex flexDirection="row" justifyContent="center" gap="8px" >
                        <CodeInput onChange={setCode} />
                    </Flex>

                        <Flex>
                        <Text fontSize="small" color="secondary">Não recebeu o código? <LinkText>Renviar</LinkText></Text>
                    </Flex> 
                    
                    <center>{error}</center>
                    <Button palette="primary" variant="contained" onclick={handleSubmit}>Continuar</Button>
                    
                    
                </ContainerCard>
            </Flex>
        </>
    )
}

export default CodeStep

const ContainerCard = styled.div`
    background-color: #FFFFFF;
    border: 1px solid ${({theme}) => theme.colors.neutro_color_200};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 35%;

    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 20px ;
`


const LinkText = styled.button`
    color: ${({theme}) => theme.colors.neutro_color_700};
    padding: 0px;
    font-size: 14px;
    width: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`