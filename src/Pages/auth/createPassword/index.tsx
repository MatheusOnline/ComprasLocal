import styled from "styled-components";
import { DefaultTemplate } from "../../../Template/DefaultTemplate";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Button } from "@components/UI/Button";
import { useNavigate } from "react-router-dom";

import { Input } from "@components/UI/Input/Input";
const CreatePassword = () => {
    const navigate = useNavigate()

    return (
        <DefaultTemplate>
            <Flex fullWidth justifyContent="center">
                <ContainerCard>
                
                    <LinkText onClick={() => {navigate(-1)}}  >Voltar</LinkText>
                
                    <Flex flexDirection="column" gap="4px" fullWidth alignItems="center" >
                        <Text fontSize="large">Crie sua nova senha</Text>
                        <Text fontSize="small" color="secondary">Escolha uma senha forte para proteger sua conta.</Text>
                    </Flex>
                    <Flex flexDirection="column" justifyContent="center" gap="8px" >
                        <Input label="Senha" type="password" placeholder="***********"/>
                        <Input label="Confirmar senha" type="password" placeholder="**********"/>
                    </Flex>
                    

                    <Button palette="primary" variant="contained">Continuar</Button>
                    
                    
                </ContainerCard>
            </Flex>
        </DefaultTemplate>

    )

}

export default CreatePassword

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
const LinkText = styled.button`
    color: ${({theme}) => theme.colors.neutro_color_700};
    padding: 0px;
    font-size: 14px;
    width: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`