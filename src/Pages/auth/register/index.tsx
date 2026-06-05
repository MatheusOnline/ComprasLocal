import styled from "styled-components";
import { DefaultTemplate } from "../../../Template/DefaultTemplate";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Button } from "@components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@components/UI/Input/Input";
import {SocialAuth} from "@components/Layout/SocialAuth/SocialAuth";
import { ScrollToTop } from "@components/UI/ScrollToTop";
import { useRegister } from "../../../hooks/useAuth";
import { useState } from "react";



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
    const navigate = useNavigate()
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
                        <Input label="CPF" type="text" placeholder="Nome" value={cpf} onChange={(e) => {setCpf(e.target.value)}}/>
                        <Input label="Telefone" type="text" placeholder="Sobrenome" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                    </Flex>
                    <Input label="Email" type="text" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    <Input label="Senha" type="text" placeholder="*********" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    <Input label="Confirmar senha" type="text" placeholder="*********"  value={passwordConfi} onChange={(e) => {setPasswordConfi(e.target.value)}} />
                </Flex>
                
                <Flex gap="10px">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">Li e concordo com os termos de uso</label>
                </Flex>
                {error}
                <Button palette="primary" variant="contained" onclick={handleSubmit}>Cadastrar</Button>
                <Flex fullWidth justifyContent="center">
                    <Text fontSize="small">Já tem uma conta? <LinkText to="/auth/login">Faça login</LinkText></Text>
                </Flex>
                <SocialAuth/>
            </ContainerCard>
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