import styled from "styled-components";
import { DefaultTemplate } from "../../../Template/DefaultTemplate";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Button } from "@components/UI/Button";
import { Link } from "react-router-dom";
import { Input } from "@components/UI/Input/Input";
import {SocialAuth} from "@components/Layout/SocialAuth/SocialAuth";
import { ScrollToTop } from "@components/UI/ScrollToTop";

import { useLogin } from "../../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const loginMutation = useLogin()

    const handleSubmit = async () => {
        if(!email && !password){
            setError("Preencha todos os campo para continuar")
            return
        }

        loginMutation.mutateAsync(
        {
            password: password,
            email: email
        },{
            onSuccess: (data) => {
                console.log(data)
                if(!data.success){
                    setError("Email ou senha incorreto")
                }else{
                    navigate("/")
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
            <Center>
                <ContainerCard>
                    <Flex flexDirection="column" gap="4px" >
                        <Text fontSize="large">Login</Text>
                        <Text fontSize="small" color="secondary">Faça login para acessar sua conta.</Text>
                    </Flex>
                    <Flex flexDirection="column" gap="8px" >
                        <Input label="Email" type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                        <Input label="Senha" type="password" placeholder="Senha" onChange={(e) => {setPassword(e.target.value)}}/>
                    </Flex>
                    <LinkText to="/auth/forgot-password">Esqueceu a senha?</LinkText>

                    {error} 
                    <Button palette="primary" variant="contained" onclick={handleSubmit}>Login</Button>
                    <Flex fullWidth justifyContent="center">
                        <Text fontSize="small">Não tem uma conta? <LinkText to="/auth/register">Cadastre-se</LinkText></Text>
                    </Flex>
                    <SocialAuth/>
                </ContainerCard>
            </Center>
        </DefaultTemplate>

    )

}

export default Login


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

const Center = styled.div`
    height: 80vh;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`