import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";

import { useParams } from "react-router-dom";

import { useCardGenerate } from "../../service/PaymentService";
import { useGetCheckout } from "../../service/checkoutService";

import styled from "styled-components";
import { DefaultTemplate } from "../../Template/DefaultTemplate";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";

initMercadoPago("TEST-e1ece030-0820-4db4-8ea3-4a30fbda9c9c");

const Card = () => {
  const { checkoutId } = useParams();

  const { data: checkoutData } = useGetCheckout(
    checkoutId || ""
  );

  const cardPayment = useCardGenerate();

  const amount = Number(checkoutData?.total || 0);

  const handlePayment = async (formData: any) => {
    if (!checkoutId) {
      console.error("Checkout não informado");
      return;
    }

    console.log("DADOS DO BRICK:", formData);

    const token = formData?.token;

    if (!token) {
      console.error("Token do cartão não encontrado");
      return;
    }

    try {
      const response = await cardPayment.mutateAsync({
        checkout_id: checkoutId,
        cardToken: token,
        payment_method_id:formData.payment_method_id
      });

      console.log("Pagamento criado:", response);

    } catch (error) {
      console.error("Erro ao processar pagamento:", error);
    }
  };

  return (
    <DefaultTemplate>
      <Flex fullWidth justifyContent="center">

        <ContainerCard>

          <Header>
            <Text
              fontSize="medium"
              fontWeight="semi-bold"
            >
              Pagamento no cartão
            </Text>

            <Text
              fontSize="small"
              color="secondary"
            >
              Valor: R$ {amount.toFixed(2)}
            </Text>
          </Header>

          <CardPayment
            initialization={{
              amount: amount,
            }}

            customization={{
              visual: {
                style: {
                  theme: "default",
                },
              },
            }}

            locale="pt-BR"

            onSubmit={async (formData: any) => {
              await handlePayment(formData);
            }}

            onReady={() => {
              console.log("Card Payment Brick pronto");
            }}

            onError={(error: any) => {
              console.error(
                "Erro no Card Payment Brick:",
                error
              );
            }}
          />

        </ContainerCard>

      </Flex>
    </DefaultTemplate>
  );
};

const ContainerCard = styled.div`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.neutro_color_200};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  border-radius: 12px;
  width: 100%;
  max-width: 700px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export default Card;