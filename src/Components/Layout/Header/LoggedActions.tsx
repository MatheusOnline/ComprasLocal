import { Flex } from "@components/UI/Flex"
import { Button } from '../../UI/Button'
import { useNavigate } from "react-router-dom"
export const LoggedActions = () => {

    const navigate = useNavigate()
    return(
        <Flex gap={"10px"}>
            <Button variant="contained" palette='primary' onclick={() => {navigate("/auth/login")}}>Entrar</Button>
            <Button variant="outlined" palette='primary' onclick={() => {navigate("/auth/register")}}>Cadastrar</Button>
        </Flex>
    )
}

