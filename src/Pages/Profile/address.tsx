import styled from "styled-components";
import { Button } from "@components/UI/Button";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { useListAddress } from "../../service/addressService";
import { useDeleteAddress } from "../../service/addressService";
import { ModalCreateAddress } from "@components/Layout/ModalCreateAddress";
import { useState } from "react";

interface AddressProps {
    id: string
    label: string
    is_default: boolean,
    city: string
    street: string
    number: string,
    postal_code: string
    district: string
    reference: string
    complement: string
}

const Address = () => {
    const {data} = useListAddress()
    const deleteAddress = useDeleteAddress();
    const [isCreateAddres,setIsCreateAddres] = useState(false)

    

    async function HandleDeleteAddress(id:string){
        try {
            await deleteAddress.mutateAsync(id);
            
        } catch (error) {
            console.log(error);
        }
    }

    

    

    return (
        <Container>
            <Flex justifyContent="space-between" alignItems="center" fullWidth>
                <Title>Meus Endereços</Title>

                <Button variant="contained" palette="primary" onclick={() => setIsCreateAddres(true)}>
                    Novo Endereço
                </Button>
            </Flex>

        
            {data?.data?.length === 0 ? (
                /*Message para caso nao tenha nenhum endereco ainda */
                <EmptyState>
                    <Text fontWeight="semi-bold" fontSize="medium">
                        Você ainda não possui nenhum endereço cadastrado.
                    </Text>

                    <Text color="secondary">
                        Cadastre um endereço para facilitar suas próximas compras.
                    </Text>

                    
                </EmptyState>
            ) : (
                /* Cards Do enderecos cadastrados */
                <Cards>
                    {data?.data?.map((address:AddressProps) => (
                        <Card key={address.id}>

                            <Flex
                                justifyContent="space-between"
                                alignItems="center"
                                fullWidth
                            >
                                <Text
                                    fontWeight="semi-bold"
                                    fontSize="medium"
                                >
                                    {address.label}
                                </Text>

                                {address.is_default && (
                                    <Primary>
                                        Principal
                                    </Primary>
                                )}
                            </Flex>

                            <Flex gap="5px">
                                <Text color="secondary">
                                    {address.street}, {address.number}
                                </Text>
                                <Text color="secondary" >
                                    |
                                </Text>
                                <Text color="secondary">
                                    {address.district}
                                </Text>
                            </Flex>
                            <Text color="secondary">
                                {address.city} 
                            </Text>

                            <Text color="secondary">
                                CEP: {address.postal_code}
                            </Text>

                            <Buttons>
                                <Button
                                    variant="outlined"
                                    palette="primary"
                                >
                                    Editar
                                </Button>

                                <Button
                                    variant="outlined"
                                    palette="neutral"
                                    onclick={() => {HandleDeleteAddress(address.id)}}
                                >
                                    Excluir
                                </Button>
                            </Buttons>

                        </Card>
                    ))}
                </Cards>
            )}
           <ModalCreateAddress open={isCreateAddres} onClose={() => setIsCreateAddres(false)}/>
        </Container>
    );
};

export default Address;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.colors.neutro_color_700};
    
`;

const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    min-height: 250px;

    
    border-radius: 12px;

    background: ${({ theme }) => theme.colors.neutro_color_200};

    text-align: center;
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
`;

const Card = styled.div`
    padding: 20px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
    background: ${({ theme }) => theme.colors.background_color};

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Buttons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const Primary = styled.span`
    background: ${({ theme }) => theme.colors.brand_color_400};
    color: white;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
`;

