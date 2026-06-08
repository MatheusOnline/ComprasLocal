import styled from "styled-components";
import { DefaultTemplate } from "../../../Template/DefaultTemplate";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Button } from "@components/UI/Button";
import { Link } from "react-router-dom";
import { Input } from "@components/UI/Input/Input";
import {SocialAuth} from "@components/Layout/SocialAuth/SocialAuth";
import { ScrollToTop } from "@components/UI/ScrollToTop";
import { useNavigate } from "react-router-dom";
import { useForgotPassword } from "../../../hooks/useAuth";
import { useState } from "react";
const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("") 
    const [error, setError] = useState("")

    const ForgotPasswordMutation  = useForgotPassword()
    const handleSubmit = async () => {
        if(!email ){
            setError("Preencha o email")
            return
        }

        ForgotPasswordMutation.mutateAsync(
         email
            ,{
            onSuccess: (data) => {
                console.log(data)
                if(!data.success){
                    setError("Email ou senha incorreto")
                }else{
                    navigate(`/auth/code?token=${encodeURIComponent(data.recoverToken)}`)
                }
            },
            onError: (error) => {
                console.log(error)
            }
        })
        
    }

    return (
        <DefaultTemplate>
            <ScrollToTop/>
            <ContainerCard>
                <Flex flexDirection="column" gap="4px" >
                    <Text fontSize="large">Recuperar Senha</Text>
                    <Text fontSize="small" color="secondary">Insira seu email para recuperar a senha.</Text>
                </Flex>
                <Flex flexDirection="column" gap="8px" >
                    <Input label="Email" type="text" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)} } />
                </Flex>
                
                {error}
                <Button palette="primary" variant="contained" onclick={handleSubmit}>Recuperar Senha</Button>
                <Flex fullWidth justifyContent="center">
                    <Text fontSize="small">Não tem uma conta? <LinkText to="/auth/register">Cadastre-se</LinkText></Text>
                </Flex>
                <SocialAuth/>
            </ContainerCard>
        </DefaultTemplate>

    )

}

export default ForgotPassword


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