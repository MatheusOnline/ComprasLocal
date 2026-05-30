import styled from "styled-components"
import { useState } from "react"
import { Link } from "react-router-dom"

import Logo from "@assets/Img/Logos/PrimaryLogo.png"
import { Search } from '../../UI/Search'

import { LoggedActions } from "./LoggedActions"
import { GuestActions } from "./GuestActions"


export const Header = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    

    //FUNCAÇÃO PARA MUDAR OS BOTOES DE ACOES DEPENDENDO SE TA LOGADO OU NAO
    const getActions = (isLoggedIn: boolean) => {
        if (isLoggedIn) return <LoggedActions />;
        return <GuestActions />;
        setIsLoggedIn(false)
    };

    return(
        <ContainerHeader>
            <Link to="/"><LogoStyled src={Logo} alt="Logo" /></Link>

            <Search/>

            {getActions(isLoggedIn)}
        </ContainerHeader>
    )
}



const ContainerHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(12px, 1vw, 50px) clamp(12px, 1vw, 50px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    background-color: #FFFFFF;
    z-index: 1000;
`

const LogoStyled = styled.img`
  width: clamp(80px, 8vw, 240px);
  height: auto;
`;