import styled from "styled-components"
import { useNavigate,useParams  } from "react-router-dom"
import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { Flex } from "@components/UI/Flex"
import { Text } from "@components/UI/Text"
import { Button } from "@components/UI/Button"
import { ScrollToTop } from "@components/UI/ScrollToTop"

import { useEffect } from "react"

import { io } from "socket.io-client";
import { useGetPaymentData } from "../../service/PaymentService";



const Payment = () => {
    const navigate = useNavigate()
    const { checkoutId } = useParams();
    const { data } = useGetPaymentData(checkoutId || "");
    
    
    


    
    const copyQrCode = async () => {
        try {
            await navigator.clipboard.writeText(data?.data?.qr_code || "");
            return true;
        } catch {
            return false;
        }
    };

    useEffect(() => {
        if (!checkoutId) return;

        const socket = io("http://localhost:3000", {
            withCredentials: true
        });

        socket.on("connect", () => {
            console.log("Socket conectado:", socket.id);

            socket.emit("join_checkout", checkoutId);
        });

        socket.on("payment:approved", (data) => {
            console.log("Pagamento aprovado:", data);

            
             navigate(`/pedido/${checkoutId}`);
        });

        socket.on("disconnect", () => {
            console.log("Socket desconectado");
        });

        return () => {
            socket.disconnect();
        };

    }, [checkoutId]);
    

    return(
        <DefaultTemplate>
            <ScrollToTop/>
             
            <Flex alignItems="center" justifyContent="center" fullWidth={true} >
                <ContainerPix>
                    <Flex>
                        <Button onclick={() => {navigate(-1)} } variant="text" palette="neutral"> Voltar</Button>
                    </Flex>
                    
                    <Flex fullWidth={true} gap="10px" flexDirection="column" alignItems="center" justifyContent="center">
                        
                        <ImagemPix src={"data:image/png;base64," + data?.data?.qr_code_base64}/>
                        <Text fontSize="large" color="primary">R$ {data?.data?.amount?.toFixed(2)}</Text>
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



