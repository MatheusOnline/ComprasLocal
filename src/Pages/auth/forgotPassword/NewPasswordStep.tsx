import styled from "styled-components"
import { useForgotPasswordStore } from "../../../stores/forgotPasswordStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../stores/useAuthStore"

//COMPONENTES
import { Flex } from "@components/UI/Flex"
import { Button } from "@components/UI/Button"
import { Input } from "@components/UI/Input/Input"
import { Text } from "@components/UI/Text"


const NewPasswordStep = () => {
    const navigate = useNavigate()
    const {backStep, newPasswordFunction, resetToken} = useForgotPasswordStore()
    const {setUser} = useAuth()
    const [password, setPassword] = useState("")
    const [passwordConfi, setPasswordConfi] = useState("")
    const [error, setError] = useState("")
    async function handleSubmit(){
        if(password || passwordConfi){
            if(password === passwordConfi){
                const result = await newPasswordFunction(password, resetToken)
                if(result?.success){
                    setUser({name: result.user.name, email: result.user.email })
                    navigate("/")
                }

            }else{
                setError("As senhas não sao iguais")
            }
        }
    

    }


    return(

       <Flex fullWidth justifyContent="center">
            <ContainerCard>
            
                <LinkText onClick={backStep}  >Voltar</LinkText>
            
                <Flex flexDirection="column" gap="4px" fullWidth alignItems="center" >
                    <Text fontSize="large">Crie sua nova senha</Text>
                    <Text fontSize="small" color="secondary">Escolha uma senha forte para proteger sua conta.</Text>
                </Flex>
                <Flex flexDirection="column" justifyContent="center" gap="8px" >
                    <Input label="Senha" type="password" placeholder="***********" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <Input label="Confirmar senha" type="password" placeholder="**********" value={passwordConfi} onChange={(e) => {setPasswordConfi(e.target.value)}}/>
                </Flex>
                
                <center>{error}</center>
                <Button palette="primary" variant="contained" onclick={handleSubmit}>Continuar</Button>
                
                
            </ContainerCard>
        </Flex>
    )
}

export default NewPasswordStep

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