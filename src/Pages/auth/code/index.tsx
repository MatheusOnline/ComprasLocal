import styled from "styled-components";
import { DefaultTemplate } from "../../../Template/DefaultTemplate";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Button } from "@components/UI/Button";
import { CodeInput } from "@components/UI/CodeInput/CodeInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useVerifyCode } from "../../../hooks/useAuth";
const Code = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();

    const token = searchParams.get("token");
    const [code, setCode] = useState("")
    const [error, setError] = useState("")
    const verifyCodeMutation = useVerifyCode()
    
        const handleSubmit = async () => {
            if(!code && token ){
                setError("Preencha todos os campo para continuar")
                return
            }
            console.log(token)
            verifyCodeMutation.mutateAsync(
            {
                code: code,
                recoverToken: token || ""
            },{
                onSuccess: (data) => {
                    console.log(data)
                    if(!data.success){
                        setError("Email ou senha incorreto")
                    }else{
                        navigate(`/auth/create-password?token=${data.resetToken}`)
                    }
                },
                onError: (error) => {
                    console.log(error)
                }
            })
            
        }
    

    return (
        <DefaultTemplate>
            <Flex fullWidth justifyContent="center">
                <ContainerCard>
                    
                     <LinkText onClick={() => {navigate(-1)}}>Voltar</LinkText> 
                    
                    <Flex flexDirection="column" gap="4px" fullWidth alignItems="center" >
                        <Text fontSize="large">Digite o codigo</Text>
                        <Text fontSize="small" color="secondary">Insira o código enviado para seu email</Text>
                    </Flex>
                   
                    <Flex flexDirection="row" justifyContent="center" gap="8px" >
                        <CodeInput onChange={setCode} />
                    </Flex>

                     <Flex>
                        <Text fontSize="small">Não recebeu o código? <LinkText>Renviar</LinkText></Text>
                    </Flex> 
                    {error}
                    <Button palette="primary" variant="contained" onclick={handleSubmit}>Continuar</Button>
                    
                    
                </ContainerCard>
            </Flex>
        </DefaultTemplate>

    )

}

export default Code

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