import styled from "styled-components"
import Logo from "@assets/Img/Logos/PrimaryLogo.png"


import { Button } from '../../UI/Button'
import { Search } from '../../UI/Search'
export const Header = () => {
    return(
        <ContainerHeader>
            <LogoStyled src={Logo} alt="Logo" />

            <Search/>

            <ContainerActions>
                <Button variant="contained" palette='primary' >Entrar</Button>
                <Button variant="outlined" palette='primary' >Cadastrar</Button>
            </ContainerActions>

        </ContainerHeader>
    )
}

const ContainerHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`
const ContainerActions = styled.div`
    display: flex;
    gap: 10px;
`

const LogoStyled = styled.img`
    width: 10%;
`