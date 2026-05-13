import styled from "styled-components";
import { Text } from "../../UI/Text";
import { Flex } from "../../UI/Flex";
import { Link } from "react-router-dom";
//Icones
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin    } from "react-icons/fa";


export function Footer() {
    return(
        <FooterStyled>
                <Flex flexDirection="column" gap="3rem">
                    <div>
                        <Text fontWeight="bold" fontSize="medium" color="white">
                            COMPRAS LOCAL
                        </Text>
                    </div>
                    <Text fontSize="small" color="white" maxWidth="450px">
                        Conectando consumidores aos melhores comércios de Umuarama. Encontre produtos, promoções e lojas da sua cidade de forma rápida, prática e segura
                    </Text>
                    <Flex gap="1rem">
                        <FaFacebookF color="#FFFFFF"/>
                        <FaInstagram color="#FFFFFF"/>
                        <FaTwitter color="#FFFFFF"/>
                        <FaLinkedin color="#FFFFFF"/>
                    </Flex>
                </Flex>

                <Flex flexDirection="column" gap="1rem">
                    <div>
                        <Text fontWeight="bold" fontSize="medium" color="white">
                            Links
                        </Text>
                    </div>
                    <Link to="/"><Text fontSize="small" color="white">Home</Text></Link>
                    <Link to="/profile"><Text fontSize="small" color="white">Perfil</Text></Link>
                    <Link to="/favorites"><Text fontSize="small" color="white">Curtidos</Text></Link>
                    <Link to="/cart"><Text fontSize="small" color="white">Carrinho</Text></Link>
                </Flex>

                 <Flex flexDirection="column" gap="1rem">
                    <div>
                        <Text fontWeight="bold" fontSize="medium" color="white">
                            Contatos
                        </Text>
                    </div>
                    <Text fontSize="normal" color="white" maxWidth="450px">
                        +55 44 99909-3250
                    </Text>
                    <Text fontSize="normal" color="white" maxWidth="450px">
                        matheus.francisco20021@gmail.com
                    </Text>
                    <Text fontSize="normal" color="white" maxWidth="450px">
                        Rua curitiba, 5220
                    </Text>
                </Flex>
        </FooterStyled>
        
    )

}


const FooterStyled = styled.footer`
    background-color: ${({ theme }) => theme.colors.brand_color_600};
    height: 250px;
    width: 100%;
    padding: 20px 7%;
    justify-content: space-between;
    display: flex;
    
`

