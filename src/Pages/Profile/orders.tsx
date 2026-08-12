import styled from "styled-components";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Button } from "@components/UI/Button";
import { Modal } from "@components/UI/Modal/Index";

import { OrderStatus } from "@components/UI/OrderStatus/Index";

import { OrderAddress } from "@components/UI/OrderAddress";
import { useState } from "react";
const orders = () => {
    const [open, setOpen] = useState(false);


    const pedidos = [
        {
            id: "100023",
            date: "01/08/2026",
            status: "Entregue",
            total: "899,90",
            image: "https://res.cloudinary.com/dzmft5evx/image/upload/v1784678303/meu-site/nxjcx73a3fnzfqdlrw8y.jpg",
            title: "Poltrona Decorativa",
            quantity: 2
        },
        {
            id: "100024",
            date: "30/07/2026",
            status: "Em transporte",
            total: "429,90",
            image: "https://res.cloudinary.com/dzmft5evx/image/upload/v1784678303/meu-site/nxjcx73a3fnzfqdlrw8y.jpg",
            title: "Kit 2 Puffs",
            quantity: 1
        }
    ];

    return (
        <Container>
            <Title>Minhas Compras </Title>

            <Flex flexDirection="column" gap="20px">

                {pedidos.map((pedido) => (
                    <Card key={pedido.id}>

                       

                        <Info>
                            {/* Header do pedido numero do pedido, status e data */}
                            <Flex  flexDirection="column" >
                                <Flex fullWidth justifyContent="space-between" alignItems="center" flexDirection="row">
                                    <Text fontWeight="semi-bold">
                                        Pedido #{pedido.id}
                                    </Text>

                                    <Status status={pedido.status}>
                                        {pedido.status}
                                    </Status>
                                </Flex>

                                <Text fontSize="small" color="secondary">
                                    {pedido.date}
                                </Text>
                            </Flex>

                            {/* Card do produto comprado */}
                            <Flex flexDirection="row">
                                <Image src={pedido.image}/>
                                <Flex flexDirection="column" justifyContent="space-between" fullWidth>
                                    <Flex flexDirection="column">
                                        <Text fontWeight="semi-bold">
                                            {pedido.title}
                                        </Text>

                                        <Text fontSize="small" color="secondary" >
                                            {pedido.quantity} produto(s)
                                        </Text>
                                    </Flex>

                                    <Flex fullWidth={true} justifyContent="space-between" alignItems="end" flexDirection="row">
                                        <Text fontWeight="semi-bold" fontSize="medium" color="secondary">
                                            Total: R$ {pedido.total}
                                        </Text>

                                        <Button variant="outlined" palette="primary" onclick={() => setOpen(true)}>
                                            Ver detalhes
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Flex>

                        </Info>

                    </Card>
                ))}

            </Flex>

            <Modal open={open}  onClose={() => setOpen(false)} title="Pedido #100023">
                <OrderStatus status="Em transporte"/>
                   
                <OrderAddress
                    recipient="Matheus Francisco"
                    street="Rua Paraná"
                    number="120"
                    district="Centro"
                    city="Umuarama"
                    state="PR"
                    zipCode="87500-000"
                />
            </Modal>

        </Container>
    );
};

export default orders;

const Container = styled.div`
    width: 100%;
`;

const Title = styled.h2`
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.neutro_color_700};
    
`;

const Card = styled.div`
    display: flex;
    gap: 20px;

    padding: 20px;

    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
    border-radius: 10px;

    background: ${({ theme }) => theme.colors.background_color};

    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px;
`;

const Image = styled.img`
    width: 90px;
    height: 90px;
    object-fit: contain;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
`;

const Status = styled.span<{ status: string }>`
    font-weight: 600;

    color: ${({ theme }) => theme.colors.brand_color_400};
`;