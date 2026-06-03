import { initMercadoPago, CardNumber, ExpirationDate, SecurityCode } from "@mercadopago/sdk-react";
import styled from "styled-components";
import { DefaultTemplate } from "../../Template/DefaultTemplate";
import { Flex } from "@components/UI/Flex";
import {Text} from "@components/UI/Text";
import {Button} from "@components/UI/Button";
import { Icon } from "@components/UI/Icon/Icon";
import visa from "@assets/Svgs/Visa.svg";
import mastercard from "@assets/Svgs/Mastercard.svg";
import elo from "@assets/Svgs/Elo.svg";

initMercadoPago("TEST-ade81bb2-f6b3-477d-9aaa-455044cf3979");

const Card = () => {
  const initialization = {
    amount: 100,
  };


  const onSubmit = async (formData: any) => {
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      console.log("Pagamento:", result);
    } catch (error) {
      console.error("Erro ao processar pagamento:", error);
    }
  };

  return (
    <DefaultTemplate>
        <Flex fullWidth justifyContent="center">
            <ContainerCard>
                <Flex justifyContent="space-between" >
                  <Text fontSize="medium" fontWeight="semi-bold">Pagamento no cartão</Text>
                  <Flex gap="8px" alignItems="center" >
                    <Icon icon={visa} />
                    <Icon icon={mastercard} />
                    <Icon icon={elo} />
                  </Flex>
                </Flex>
                <Flex flexDirection="column" gap="14px" >

                  <Flex flexDirection="column" gap="8px" >
                      <Text>Numero do cartão</Text>
                      <ContainerInput>

                        <CardNumber placeholder="Número do cartão"  style={{ height: "100%" }}/>
                      </ContainerInput>
                  </Flex>

                  <Flex gap="16px" flexDirection="row" >
                    <Flex flexDirection="column" gap="8px" >
                      <Text>Expiração</Text>
                      <ContainerInput>

                        <ExpirationDate placeholder="MM/AA"  style={{ height: "100%" }}/>
                      </ContainerInput>
                    </Flex>
                    
                    <Flex flexDirection="column" gap="8px" >
                      <Text>Codigo de segurança</Text>
                      <ContainerInput>
                        <SecurityCode placeholder="Ex: 123"  style={{ height: "100%" }}/>
                      </ContainerInput>
                    </Flex>
                  </Flex>
                  
                  <Flex flexDirection="column" gap="8px" >
                    <Text>CPF do titular</Text> 
                   <ContainerInput>
                      <Text>076.540.589-00</Text>
                    </ContainerInput>
                  </Flex>

                  <Flex flexDirection="column" gap="8px" >
                    <Text>Email</Text> 
                   <ContainerInput>
                      <Text>matheus.francisco20021@gmail.com</Text>
                    </ContainerInput>
                  </Flex>
                  
                  <Button onclick={() => onSubmit(initialization)} fullWidth variant="contained" palette="primary">
                    Realizar Pagamento
                  </Button>
                </Flex>
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
  max-width: 600px;
  padding: 24px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 0;
  }
`;

const ContainerInput = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.neutro_color_300};
  padding: 0px 8px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
`

export default Card;