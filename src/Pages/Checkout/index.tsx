import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DefaultTemplate } from "../../Template/DefaultTemplate";
import { Breadcrumbs } from "@components/UI/Breadcrumb";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Line } from "@components/UI/Line";


import { CartSummary } from "@components/Layout/CartSummary";
import { useCheckoutStore } from "../../stores/checkoutStore";
import { useAuth } from "../../stores/useAuth";

import formatedCPF from "../../functions/formatedCpf";


const Checkout = () => {
    const navigate = useNavigate();
     const { checkoutId } = useParams();
    const [payMethod, setPayMethod ] = useState("");
    const [products, setProducts] = useState<any>([])
    const [checkout_id, setCheckout_id] = useState("")
    const [total, setTotal] = useState(0)
    const [subtotal, setSubtotal] = useState(0) 
    const { getCheckout } = useCheckoutStore()
    const { user } = useAuth()

    useEffect(() => {
      
       get()
    },[checkoutId])

    async function get() {
      const data = await getCheckout(checkoutId || "")
      console.log(data)
      
      setProducts(data?.products)
      setTotal(data?.total || 0)
      setSubtotal(data?.subtotal || 0)
      setCheckout_id(data?.checkoutId || "")
    }
  

    const handleCheckout = () => {
      if (payMethod === "PIX") {
        navigate(`/payment/pix/${checkout_id}`);;
        return;
      }

      if (payMethod === "CARTAO") {
        navigate(`/payment/card/${checkout_id}`);
        return;
      }
    };
    console.log(user)
  return (
    <DefaultTemplate>
      <Breadcrumbs label="checkout" path={["cart"]} isLoading={false}/>
      
      <Flex flexDirection="row" fullWidth={true} gap="30px">

        <ContainerTopics>

          {/* PRODUTOS */}
          <ProductsContainer>

            <Text fontSize="medium" fontWeight="semi-bold">{products.length} Produtos</Text>

            
            <ProductsList>
              {products.length ? (
                products.map((item:any) => (
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
          
          <Line />

          {/* ENDEREÇO */}
          <Flex flexDirection="column" gap="10px">
            <Text fontSize="medium"  fontWeight="semi-bold">Endereço</Text>
            <Flex gap="20px">
                <Text>Rua Curitiba 5220 - Umuarama</Text> <ReplaceButton>Alterar</ReplaceButton>
            </Flex>
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

        <CartSummary isLoading={false} isEnabled={!!!payMethod}  onConfirm={handleCheckout} subtotal={subtotal} total={total} />
        
      </Flex>
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
