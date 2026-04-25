import Logo from '../../assets/logo.png'
import { ContainerHeader, ContainerActions } from './styled'

import { Button } from '../Button'
import { Search } from '../Search'

export const Header = () => {
    return(
        <ContainerHeader>
            <img src={Logo} alt="Logo" />

            <Search/>

            <ContainerActions>
                <Button variant="primary" scale="normal" >Entrar</Button>
                <Button variant="secondary" scale="normal" >Cadastrar</Button>
            </ContainerActions>

        </ContainerHeader>
    )
}