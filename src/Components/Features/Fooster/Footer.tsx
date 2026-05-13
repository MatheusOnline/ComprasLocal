import styled from "styled-components";

export function Footer() {
    return(
        <FooterStyled>

        </FooterStyled>
        
    )

}


const FooterStyled = styled.footer`
    background-color: ${({ theme }) => theme.colors.brand_color_400};
    height: 500px;
    width: 100%;
`