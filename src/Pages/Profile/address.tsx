import styled from "styled-components";
import { Button } from "@components/UI/Button";
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { useListAddress } from "../../service/addressService";
import { useDeleteAddress } from "../../service/addressService";
import { useState } from "react";
import { Modal } from "@components/UI/Modal/Index";
import { Input } from "@components/UI/Input/Input";
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
    const [isCreateAddress, setIsCreateAddres] = useState(false)
    

    const [cep, setCep] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [district, setDistrict] = useState("");
    const [reference, setReference] = useState("")
    const [complement, setComplement] = useState("")
    const [number, setNumber] = useState("")

    


    async function HandleDeleteAddress(id:string){
        try {
            await deleteAddress.mutateAsync(id);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleCepChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setCep(value);

        const cleanCep = value.replace(/\D/g, "");

        if (cleanCep.length === 8) {
            const address = await buscarCEP(cleanCep);

            if (address) {
                setCity(address.localidade);
                setStreet(address.logradouro);
                setDistrict(address.bairro);
            }
        }
    }

    const buscarCEP = async (cep: string) => {
        cep = cep.replace(/\D/g, "");

        if (cep.length !== 8) return null;

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                return null;
            }

            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    function closeModal(){
        setCep("")
        setCity("")
        setDistrict("")
        setStreet("")
        setIsCreateAddres(false)
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
            <Modal open={isCreateAddress} onClose={() => setIsCreateAddres(false)} isHeadle={false}>
                <Content>
                    <Title>Novo Endereço</Title>

                    <Row>
                        <InputContainer>
                            <Label>Cidade</Label>

                            <Select
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            >
                                <option value="Umuarama">Umuarama</option>
                            </Select>
                        </InputContainer>

                        <Input label="Nome do endereço" placeholder="Ex: Casa, Trabalho..." />
                    </Row>

                    <Row>
                        <Input label="CEP" value={cep} onChange={handleCepChange}/>
                        <Input label="Número" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </Row>

                    <Input label="Rua" value={street} onChange={(e) => setStreet(e.target.value)}/>

                    <Input label="Bairro" value={district} onChange={(e) => setDistrict(e.target.value)}/>

                    <Input label="Ponto de referência"
                            value={reference}
                            onChange={(e) => setReference(e.target.value)} 
                            />

                    <InputContainer>
                        <Label>Complemento</Label>
                        <Textarea
                            placeholder="Apartamento, bloco, fundos, etc."
                            value={complement}
                            onChange={(e) => setComplement(e.target.value)}
                            
                        />
                    </InputContainer>

                    <Footer>
                        <Button
                            variant="outlined"
                            palette="neutral"
                            onclick={() => closeModal()}
                        >
                            Cancelar
                        </Button>

                        <Button palette="primary">
                            Salvar Endereço
                        </Button>
                    </Footer>
                </Content>
            </Modal>
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

const Content = styled.div`
    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    background: ${({ theme }) => theme.colors.background_color};
    padding: 28px;
    border-radius: 12px;
`;



const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Label = styled.label`
    font-size: .9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.neutro_color_700};
`;

const Select = styled.select`
    width: 100%;
    height: 44px;

    padding: 0 14px;

    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
    border-radius: 8px;

    background: #fff;
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.colors.brand_color_400};
    }
`;

const Textarea = styled.textarea`
    width: 100%;
    min-height: 100px;

    padding: 12px 14px;

    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
    border-radius: 8px;

    outline: none;
    resize: none;
    &:focus {
        border-color: ${({ theme }) => theme.colors.brand_color_400};
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 10px;
`;