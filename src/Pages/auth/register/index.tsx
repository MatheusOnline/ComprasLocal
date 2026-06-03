import styled from "styled-components";
import { DefaultTemplate } from "../../../Template/DefaultTemplate";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Button } from "@components/UI/Button";
import { Link } from "react-router-dom";
import { Input } from "@components/UI/Input/Input";
import {SocialAuth} from "@components/Layout/SocialAuth/SocialAuth";
import { ScrollToTop } from "@components/UI/ScrollToTop";
const Register = () => {
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
                        <Input label="Nome" type="text" placeholder="Nome" />
                        <Input label="Sobrenome" type="text" placeholder="Sobrenome" />
                    </Flex>
                    <Input label="Email" type="text" placeholder="Email" />
                    <Input label="Senha" type="text" placeholder="Senha" />
                    <Input label="Confirmar senha" type="text" placeholder="Senha" />
                </Flex>
                
                <Flex gap="10px">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">Li e concordo com os termos de uso</label>
                </Flex>

                <Button palette="primary" variant="contained">Cadastrar</Button>
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