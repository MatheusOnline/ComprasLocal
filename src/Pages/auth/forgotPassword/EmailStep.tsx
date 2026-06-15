import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useForgotPasswordStore } from "../../../stores/forgotPasswordStore"
//COMPONENTS DO DESING SYSTEM
import { Flex } from "@components/UI/Flex"
import { Text } from "@components/UI/Text"
import { Button } from "@components/UI/Button"
import { Input } from "@components/UI/Input/Input"
import { SocialAuth } from "@components/Layout/SocialAuth/SocialAuth"



const EmailStep = () => {
    const {nextStep, email, setEmail, emailFunction} = useForgotPasswordStore()
    const [error, setError] = useState("")
    async function handleSubmit(){
        if(email){
            const result = await emailFunction(email)
            
            if(result?.success){
                nextStep()
            }else{
                setError(result?.message || "")
            }
        }
    }


    return(
        <>
            <ContainerCard>
                <Flex flexDirection="column" gap="0px" >
                    <Text fontSize="large">Recuperar Senha</Text>
                    <Text fontSize="small" color="secondary">Insira seu email para recuperar a senha.</Text>
                </Flex>
                <Flex flexDirection="column" gap="8px" >
                    <Input label="Email" type="text" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)} } />
                </Flex>
                
                <center>{error}</center>
                <Button palette="primary" variant="contained" onclick={handleSubmit}>Recuperar Senha</Button>
                <Flex fullWidth justifyContent="center">
                    <Text fontSize="small">Não tem uma conta? <LinkText to="/auth/register">Cadastre-se</LinkText></Text>
                </Flex>
                <SocialAuth/>
            </ContainerCard>
        </>
    )
}

export default EmailStep


const ContainerCard = styled.div`
    background-color: #FFFFFF;
    border: 1px solid ${({theme}) => theme.colors.neutro_color_200};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 35%;

    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 16px ;
`

const LinkText = styled(Link)`
    color: ${({theme}) => theme.colors.neutro_color_700};
    text-decoration: underline;
    font-size: 14px;
`