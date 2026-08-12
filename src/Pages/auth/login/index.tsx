import styled from "styled-components";
import { DefaultTemplate } from "../../../Template/DefaultTemplate";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Button } from "@components/UI/Button";
import { Input } from "@components/UI/Input/Input";
import {SocialAuth} from "@components/Layout/SocialAuth/SocialAuth";
import { ScrollToTop } from "@components/UI/ScrollToTop";
import { Message } from "@components/UI/message";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";



import { useLogin } from "../../../service/authService";
import { useAuth } from "../../../stores/useAuthStore";


import image from "@assets/Svgs/Auth/login.svg"

const Login = () => {
    const loginMutation = useLogin()
    const setUser = useAuth((state) => state.setUser);
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const navigate = useNavigate()

    const handleSubmit = async () => {
        if(!email || !password){
            setError("Preencha todos os campo para continuar.")
            return
        }
          
        loginMutation.mutateAsync(
        {
            password: password,
            email: email
            
        },{
            onSuccess: async (data) => {
                if(!data.success){
                    setError("Email ou senha incorreto")
                    return
                }
                setUser({name: data?.data?.name, email: data?.data?.email, cpf: data?.data?.cpf })
                navigate("/")
                
            },
            onError: (error: any)  => {
                console.log(error.response.data)
            }
        })
        
    }

    return (
        <DefaultTemplate>
            <ScrollToTop/>
            <Flex fullWidth={true} justifyContent="space-between" flexDirection="row">
                <ContainerCard>
                    <Flex flexDirection="column" gap="2px" >
                        <Text fontSize="large">Login</Text>
                        <Text fontSize="small" color="secondary">Faça login para acessar sua conta.</Text>
                    </Flex>
                    <Flex flexDirection="column" gap="8px" >
                        <Input label="Email" type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value); setError("");}}/>
                        <Input label="Senha" type="password" placeholder="Senha" onChange={(e) => {setPassword(e.target.value); setError("");} }/>
                    </Flex>
                    <LinkText to="/auth/forgot-password">Esqueceu a senha?</LinkText>
                    <Flex fullWidth={true} justifyContent="center" alignItems="center">
                        <Message status="error">{error} </Message>  
                    </Flex>
                    <Button palette="primary" variant="contained" onclick={handleSubmit} disabled={loginMutation.isPending }>{loginMutation.isPending ? "Entrando..." : "Login"}</Button>
                    <Flex fullWidth justifyContent="center">
                        <Text fontSize="small">Não tem uma conta? <LinkText to="/auth/register">Cadastre-se</LinkText></Text>
                    </Flex>
                    <SocialAuth/>
                </ContainerCard>
                
                <Img src={image} alt="" />
                
            </Flex>
        </DefaultTemplate>

    )

}

export default Login




//========ESTILIZAÇOES===========//

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

const Img = styled.img`
    width: 40%;
`