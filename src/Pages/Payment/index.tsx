import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { Flex } from "@components/UI/Flex"
import { Text } from "@components/UI/Text"
import { Button } from "@components/UI/Button"
import { ScrollToTop } from "@components/UI/ScrollToTop"


type PaymentPixProps = {
    baseQrCode: string
}



const Payment = ({baseQrCode}:PaymentPixProps) => {
    const navigate = useNavigate()

    const copyQrCode = async () => {
    try {
        await navigator.clipboard.writeText(baseQrCode);
        return true;
    } catch {
        return false;
    }
    };


    return(
        <DefaultTemplate>
            <ScrollToTop/>
             
            <Flex alignItems="center" justifyContent="center" fullWidth={true} >
                <ContainerPix>
                    <Flex>
                        <Button onclick={() => {navigate(-1)} } variant="text" palette="neutral"> Voltar</Button>
                    </Flex>
                    
                    <Flex fullWidth={true} gap="20px" flexDirection="column" alignItems="center" justifyContent="center">
                        
                        <ImagemPix src="data:image/png;base64,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"/>
                        <Button palette="primary" variant="outlined" onclick={copyQrCode}>Copiar Codigo pix </Button>
                    </Flex>
                    <Flex flexDirection="column" gap="10px">
                        <Text color="primary" fontWeight="semi-bold" fontSize="small">Por favor, siga as instruções:</Text>
                        <Flex flexDirection="column" gap="8px">
                            <Text fontSize="extra-small" color="secondary">1 Acesse o app do seu banco ou internet banking de preferência.</Text>
                            <Text fontSize="extra-small" color="secondary">2 Escolha pagar via Pix. </Text>
                            <Text fontSize="extra-small" color="secondary">3 Escaneie o QR Code ou copie e cole o código Pix acima. </Text>
                            <Text fontSize="extra-small" color="secondary">4 Seu pagamento será aprovado em alguns segundos. </Text>
                        </Flex>
                    </Flex>
                </ContainerPix>
            </Flex>
        </DefaultTemplate>
    )

}

export default Payment


const ContainerPix = styled.div`
    background-color: #FFFFFF;
    border: 1px solid ${({theme}) => theme.colors.neutro_color_200};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 30%;

    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px ;
    justify-content: space-between;
`

const ImagemPix = styled.img`
    width: 65%;

`



