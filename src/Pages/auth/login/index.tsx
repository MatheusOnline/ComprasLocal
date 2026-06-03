import styled from "styled-components";
import { DefaultTemplate } from "../../../Template/DefaultTemplate";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Button } from "@components/UI/Button";
import { Link } from "react-router-dom";
import { Input } from "@components/UI/Input/Input";
import {SocialAuth} from "@components/Layout/SocialAuth/SocialAuth";
import { ScrollToTop } from "@components/UI/ScrollToTop";
const Login = () => {
    return (
        <DefaultTemplate>
            <ScrollToTop/>
            <ContainerCard>
                <Flex flexDirection="column" gap="4px" >
                    <Text fontSize="large">Login</Text>
                    <Text fontSize="small" color="secondary">Faça login para acessar sua conta.</Text>
                </Flex>
                <Flex flexDirection="column" gap="8px" >
                    <Input label="Email" type="text" placeholder="Email" />
                    <Input label="Senha" type="password" placeholder="Senha" />
                </Flex>
                <LinkText to="/auth/forgot-password">Esqueceu a senha?</LinkText>

                <Button palette="primary" variant="contained">Login</Button>
                <Flex fullWidth justifyContent="center">
                    <Text fontSize="small">Não tem uma conta? <LinkText to="/auth/register">Cadastre-se</LinkText></Text>
                </Flex>
                <SocialAuth/>
            </ContainerCard>
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