import styled from "styled-components"
import { useNavigate,useParams  } from "react-router-dom"
import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { Flex } from "@components/UI/Flex"
import { Text } from "@components/UI/Text"
import { Button } from "@components/UI/Button"
import { ScrollToTop } from "@components/UI/ScrollToTop"
import { usePixGenerate } from "../../hooks/usePaymentQuery"
import { useEffect, useState } from "react"
import { useCheckoutQuery } from "../../hooks/useCheckoutQuery"





const Payment = () => {
    const navigate = useNavigate()
    const { checkoutId } = useParams();
    const { data } = useCheckoutQuery(checkoutId);
    const { mutateAsync } = usePixGenerate();
    const [qrcode, setQrcode] = useState("")
    
    useEffect(() => {
        if (checkoutId) {
            async function loadPix() {
                if (!checkoutId) return;

                const response = await mutateAsync(checkoutId);

                setQrcode(response.qrcode);
            }

        loadPix();
    }
    }, [checkoutId]);

    
    const copyQrCode = async () => {
        try {
            await navigator.clipboard.writeText("");
            return true;
        } catch {
            return false;
        }
    };

    useEffect(() => {
        console.log("Checando")
        if (data?.status === "paid") {
            navigate("/success");
        }
    }, [data]);

    

    return(
        <DefaultTemplate>
            <ScrollToTop/>
             
            <Flex alignItems="center" justifyContent="center" fullWidth={true} >
                <ContainerPix>
                    <Flex>
                        <Button onclick={() => {navigate(-1)} } variant="text" palette="neutral"> Voltar</Button>
                    </Flex>
                    
                    <Flex fullWidth={true} gap="20px" flexDirection="column" alignItems="center" justifyContent="center">
                        
                        <ImagemPix src={"data:image/png;base64," + qrcode}/>
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



