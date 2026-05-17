import { Flex } from "@components/UI/Flex"
import { Button } from '../../UI/Button'

export const LoggedActions = () => {
    return(
        <Flex gap={"10px"}>
            <Button variant="contained" palette='primary' >Entrar</Button>
            <Button variant="outlined" palette='primary' >Cadastrar</Button>
        </Flex>
    )
}

