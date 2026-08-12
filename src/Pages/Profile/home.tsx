import { Flex } from "@components/UI/Flex";
import { Modal } from "@components/UI/Modal/Index";
import { Button } from "@components/UI/Button";
import { ResetPasswordSent } from "@components/UI/ResetPassword";

import { useGetUser, useUpdateUser } from "../../service/userService";

import styled from "styled-components";
import { useState, useEffect } from "react";
const HomeProfile = () => {

    const {data} = useGetUser();

    const [open, setOpen] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (data?.data) {
            setName(data.data.firstname);
            setEmail(data.data.email);
            setPhone(data.data.phone);
        }
    }, [data]);


    
    const hasChanges =
        name !== data?.data?.firstname ||
        email !== data?.data?.email ||
        phone !== data?.data?.phone;
    

    const updateUser = useUpdateUser()
    function Update(){
        updateUser.mutateAsync(
        {
            firstname: name,
            email: email,
            phone: phone,
            
        },{
            onSuccess: async () => {
    
                
            },
            onError: (error: any)  => {
                console.log(error.response.data)
            }
        })
    }


    function Cancel(){
        if (data?.data) {
            setName(data.data.firstname);
            setEmail(data.data.email);
            setPhone(data.data.phone);
        }
    }
    

    function ResetPassword(){
        setOpen(true)


    }
    return (
        <Container>
            <Title>Seus Dados</Title>

            <Card>
                <Flex flexDirection="column" gap="20px">

                    <Row>
                        <Info>
                            <Label>Nome</Label>
                            <Field value={name} onChange={(e) => {setName(e.target.value)}}/>
                        </Info>

                        <Info>
                            <Label>E-mail</Label>
                            <Field value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </Info>
                    </Row>

                    <Row>
                        <Info>
                            <Label>CPF</Label>
                            <Field value={data?.data?.cpf} disabled/>
                        </Info>

                        <Info>
                            <Label>Telefone</Label>
                            <Field value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                        </Info>
                    </Row>

                    <Info>
                        <Label>Senha</Label>

                        <Flex alignItems="center" gap="12px">
                            <Field value={"*********"} disabled/>
                            <Button onclick={ResetPassword} palette="primary" variant="outlined">Alterar Senha</Button>
                        </Flex>
                    </Info>


                    {hasChanges && (
                        <Flex gap="10px">
                            <Button onclick={Update}>Salvar</Button>
                            <Button onclick={Cancel}>Cancelar</Button>
                        </Flex>
                    )}
                </Flex>
            </Card>
            <Modal open={open}  onClose={() => setOpen(false)}><ResetPasswordSent email={email} onClose={() => setOpen(false)}/></Modal>
        </Container>
    );
};

export default HomeProfile;

const Container = styled.div`
    max-width: 900px;
`;

const Title = styled.h2`
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.neutro_color_700};
`;

const Card = styled.div`
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 30px;
    box-shadow: 0 4px 18px rgba(0,0,0,.05);
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Label = styled.span`
    font-size: .85rem;
    color: #6b7280;
    font-weight: 600;
`;

const Field = styled.input`
    padding: 12px 15px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #f9fafb;
    color: #111827;
    font-size: .95rem;
`;

