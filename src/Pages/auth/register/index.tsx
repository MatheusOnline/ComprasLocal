import styled from "styled-components";
import { DefaultTemplate } from "../../../Template/DefaultTemplate";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Button } from "@components/UI/Button";
import { Input } from "@components/UI/Input/Input";
import {SocialAuth} from "@components/Layout/SocialAuth/SocialAuth";
import { ScrollToTop } from "@components/UI/ScrollToTop";
import { useState } from "react";
import { Message } from "@components/UI/message";

import { useRegister } from "../../../service/authService";
import { useAuth } from "../../../stores/useAuthStore";

import { Link, useNavigate } from "react-router-dom";

import image from "@assets/Svgs/Auth/register.svg"
const Register = () => {
    const [firstname , setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfi, setPasswordConfi] = useState("")
    const [error, setError] = useState("")

    const RegisterMutation = useRegister()
    const setUser = useAuth((state) => state.setUser);

    const navigate = useNavigate()
    
    const handleCpfChange = (value: string) => {
        if(cpf.length > 13)
            return
        const numbers = value.replace(/\D/g, "");

        const formatted = numbers
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        setCpf(formatted);
    };


    const handlePhoneChange = (value: string) => {
        if(phone.length > 14)
            return

        const numbers = value.replace(/\D/g, "");

        const formatted = numbers
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2");

        setPhone(formatted);
    };


    const handleSubmit = async () => {
        if(!email && !password && !firstname && !lastname && !cpf){
            setError("Preencha todos os campo para continuar")
            return
        }

        if(password !== passwordConfi){
            setError("As senhas não são iguais")
            return
        }

        RegisterMutation.mutateAsync(
        {
            firstname: firstname,
            lastname: lastname,
            cpf: cpf,
            phone: phone,
            password: password,
            email: email
        },{
            onSuccess: (data) => {
                if(!data.success){
                    
                }else{
                    setUser({name: data?.data?.name, email: data?.data?.email, cpf: data?.data?.cpf })
                    navigate("/")
                }
            },
            onError: (error: any) => {
                console.log(error)
                setError(error.response.data.message)
            }
        })
        
    }




    return (
        <DefaultTemplate>
            <ScrollToTop/>
            <Flex fullWidth={true} justifyContent="space-between">
                <ContainerCard>
                    <Flex flexDirection="column" gap="4px">
                        <Text fontSize="large">Cadastro</Text>
                        <Text fontSize="small" color="secondary">Crie sua conta para acessar.</Text>
                    </Flex>

                    <Flex flexDirection="column" gap="8px" >
                        <Flex flexDirection="row" gap="4px"  fullWidth={true} >                    
                            <Input label="Nome" type="text" placeholder="Nome" value={firstname} onChange={(e) => {setFirstname(e.target.value)}}/>
                            <Input label="Sobrenome" type="text" placeholder="Sobrenome" value={lastname} onChange={(e) => {setLastname(e.target.value)}}/>
                        </Flex>
                        <Flex flexDirection="row" gap="4px"  fullWidth={true} >                    
                            <Input label="CPF" type="text" placeholder="000.000.000-00" value={cpf} onChange={(e) => handleCpfChange(e.target.value)}/>
                            <Input label="Telefone" type="text" placeholder="(00) 00000-0000" value={phone} onChange={(e) => handlePhoneChange(e.target.value)}/>
                        </Flex>
                        <Input label="Email" type="text" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                        <Input label="Senha" type="text" placeholder="*********" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                        <Input label="Confirmar senha" type="text" placeholder="*********"  value={passwordConfi} onChange={(e) => {setPasswordConfi(e.target.value)}} />
                    </Flex>
                    
                    <Flex gap="10px">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">Li e concordo com os termos de uso</label>
                    </Flex>
                    <Flex fullWidth={true} justifyContent="center"><Message status="error">{error}</Message></Flex>
                    <Button palette="primary" variant="contained" onclick={handleSubmit}>Cadastrar</Button>
                    <Flex fullWidth justifyContent="center">
                        <Text fontSize="small">Já tem uma conta? <LinkText to="/auth/login">Faça login</LinkText></Text>
                    </Flex>
                    <SocialAuth/>
                </ContainerCard>

                <Img src={image} alt="" />
            </Flex>
        </DefaultTemplate>

    )

}

export default Register


const ContainerCard = styled.div`
    background-color: #FFFFFF;
    border: 1px solid ${({theme}) => theme.colors.neutro_color_200};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 40%;

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
    width: 35%;
`