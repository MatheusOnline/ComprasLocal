import Banner from "@assets/Banner/Banner.png"
import styled from "styled-components";

export function Carrosel() {
    return(
       <CarroselStyled>
        <img src={Banner} alt="" />

       </CarroselStyled>
    )
}

const CarroselStyled = styled.div`
    border: 1px solid red;
    height: 350px;

    img{
        max-width: 100%;
        max-height: 100%;
    }
`