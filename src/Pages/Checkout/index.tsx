import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DefaultTemplate } from "../../Template/DefaultTemplate";
import { Breadcrumbs } from "@components/UI/Breadcrumb";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Line } from "@components/UI/Line";
import { Button } from "@components/UI/Button";

import { CartSummary } from "@components/Layout/CartSummary";
import { useGetCheckout } from "../../service/checkoutService";
import { useAuth } from "../../stores/useAuthStore";

import formatedCPF from "../../functions/formatedCpf";
import { ModalCreateAddress } from "@components/Layout/ModalCreateAddress";
import { ModalSelectedAnddress } from "@components/Layout/ModalSelectedAnddress";
import { usePixGenerate } from "../../service/PaymentService";




const Checkout = () => {
    const navigate = useNavigate();
    const { checkoutId } = useParams();
    const [createAddress, setCreateAddress] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(false)
    const [payMethod, setPayMethod ] = useState("");
    
  
    const { user } = useAuth()
    const {data, refetch} =  useGetCheckout(checkoutId || "")
    const generatePix = usePixGenerate();
    
    
    const hasAddress = !!data?.address && Object.keys(data.address).length > 0;
    const isCheckoutDisabled = !hasAddress || !payMethod;

    const handleCheckout = () => {
      if (!hasAddress) return;
      if (!payMethod) return;

      if (payMethod === "PIX") {
        handleCreatePix();
        return;
      }

      if (payMethod === "CARTAO") {
        navigate(`/payment/card/${checkoutId}`);
        return;
      }
    };

    function handleCreatePix() {
        generatePix.mutateAsync(checkoutId || "", {
          onSuccess: () => {
            navigate(`/payment/pix/${checkoutId}`);
          },
          onError: (error: any) => {
            console.log(error.response.data);
          },
        });
    }

    
    
  return (
    <DefaultTemplate>
      <Breadcrumbs label="checkout" path={["cart"]} isLoading={false}/>
      
      <Flex flexDirection="row" fullWidth={true} gap="30px">

        <ContainerTopics>

          {/* PRODUTOS */}
          <ProductsContainer>

            <Text fontSize="medium" fontWeight="semi-bold">{data?.products.length} Produtos</Text>

            
            <ProductsList>
              {data?.products.length ? (
                data?.products.map((item:any) => (
                  <ProductItem key={item.id}>
                    <Flex>
                          <ImagemProduct src={item.image} alt="" />

                          <ItemRow>
                              <Text fontWeight="semi-bold">{item.name}</Text>
                              <Text>Quantidade: {item.quantity}</Text>
                              <Text>SubTotal: R${(item.price * item.quantity).toFixed(2)}</Text>
                          </ItemRow>
                      </Flex>
                      <Line/>
                  </ProductItem>
                ))
              ) : (
                <Text>Selecione itens no carrinho para continuar.</Text>
              )}
            </ProductsList>

          </ProductsContainer>
          
          

          {/* ENDEREÇO */}
          <Flex flexDirection="column" gap="10px">
            {!hasAddress ? (
                  <AddressWarning>
                      <Text fontWeight="semi-bold">
                          Você não tem nenhum endereço cadastrado.
                      </Text>

                      <Text color="secondary">
                          Cadastre um endereço para continuar com a compra.
                      </Text>

                      <Button
                          variant="outlined"
                          palette="primary"
                          onclick={() => {setCreateAddress(true)}}
                      >
                          Cadastrar endereço
                      </Button>
                  </AddressWarning>
              ) : (
                  <Flex flexDirection="column" gap="10px">
                    <Text fontSize="medium" fontWeight="semi-bold">Endereço</Text>
                    <Flex gap="10px">
                      <Text fontSize="medium" fontWeight="normal">
                          {data.address.street}, {data.address.number}
                      </Text>
                      |
                      <Text fontSize="medium" fontWeight="normal">
                          {data.address.city}
                      </Text>

                      <ReplaceButton onClick={() => {setSelectedAddress(true)}}>
                        Alterar
                      </ReplaceButton>

                    </Flex>
                  </Flex>
              )}
          </Flex>

          <Line />

          {/* CPF */}
          <Flex flexDirection="column" gap="10px">
            <Text fontSize="medium" fontWeight="semi-bold">CPF</Text>
            <Text>{formatedCPF(user?.cpf || "")}</Text>
          </Flex>

          <Line />

          {/* PAGAMENTO */}
          <Flex flexDirection="column" gap="10px">
            <Text fontSize="medium" fontWeight="semi-bold">Método de pagamento</Text>

            <Flex gap="10px">
              <LabelCard>
                <Radio type="radio" name="payMethod" onChange={() => {setPayMethod("PIX")}}/>
                <Text>Pix</Text>
              </LabelCard>
              
              <LabelCard>
                <Radio type="radio" name="payMethod"  onChange={() => {setPayMethod("CARTAO")}}/>
                <Text>Cartão</Text>
              </LabelCard>
            </Flex>

          </Flex>

        </ContainerTopics>

        <CartSummary isLoading={false} isEnabled={isCheckoutDisabled} onConfirm={handleCheckout} subtotal={data?.subtotal || 0} total={data?.total || 0} />
        
      </Flex>
      <ModalCreateAddress
        checkoutId={checkoutId || ""}
        onClose={() => {setCreateAddress(false)}}
        open={createAddress}
        onSuccess={refetch}
      />
      <ModalSelectedAnddress
        checkoutId={checkoutId || ""}
        onClose={() => {setSelectedAddress(false)}}
        open={selectedAddress}
        onSuccess={refetch}
      />
    </DefaultTemplate>
  );
};

export default Checkout;

/* ================= STYLED ================= */

const ContainerTopics = styled.div`
  width: 100%;
  border: ${({ theme }) => theme.colors.neutro_color_200} 1px solid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;



/* ===== PRODUTOS COM SCROLL ===== */

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductsList = styled.div`
  max-height: 320px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-right: 6px;

  /* scroll bonito */
  scrollbar-width: thin;
`;

const ProductItem = styled.div`
  display: flex;
  
  flex-direction: column;
  gap: 12px;
`;

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 180px;
  align-items: center;
  width: 100%;
  gap: 10px;
 
`;

const ImagemProduct = styled.img`
  max-width: 80px;
  border-radius: 8px;
`;

/* ==================== ANDRESS ======================= */
const ReplaceButton = styled.button`
    border: none;
    background-color: transparent;
    color: ${({theme}) => theme.colors.brand_color_500};
    text-decoration: underline;
    cursor: pointer;
`

const AddressWarning = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    padding: 20px;

    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.background_color};
`;


/* ===== PAYMENT ===== */

const Radio = styled.input`
  display: none;
`;

const LabelCard = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 14px;
  border: 1px solid #ccc;
  border-radius: 10px;

  cursor: pointer;
  transition: 0.2s;

  &:has(input:checked) {
    border-color: ${({ theme }) => theme.colors.brand_color_500};
    background: #f5f3ff;
  }
`;
