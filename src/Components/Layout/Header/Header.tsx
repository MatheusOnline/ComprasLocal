import Logo from '../../../assets/logo.png'
import { ContainerHeader, ContainerActions } from './styled'

import { Button } from '../../UI/Button'
import { Search } from '../../UI/Search'
export const Header = () => {
    return(
        <ContainerHeader>
            <img src={Logo} alt="Logo" />

            <Search/>

            <ContainerActions>
                <Button variant="contained" palette='primary' >Entrar</Button>
                <Button variant="outlined" palette='primary' >Cadastrar</Button>
            </ContainerActions>

        </ContainerHeader>
    )
}