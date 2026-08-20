import styled from "styled-components";
import { useState } from "react";
import { Modal } from "@components/UI/Modal/Index"
import { Flex } from "@components/UI/Flex";
import { Text } from "@components/UI/Text";
import { Button } from "@components/UI/Button";

import { useListAddress } from "../../../service/addressService";
import { useUpdateAddress } from "../../../service/checkoutService";
import { ModalCreateAddress } from "../ModalCreateAddress";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    checkoutId?: string;
    onSuccess?: () => void;
}



export const ModalSelectedAnddress = ({open, onClose, checkoutId, onSuccess}: ModalProps) => {
    const {data} = useListAddress();
    const updateAddress = useUpdateAddress();
    const [isCreateMode, setIsCreateMode] = useState(false);

    const handleSelectAddress = async (addressId: string) => {
        if (!checkoutId) return;

        try {
            await updateAddress.mutateAsync({
                checkout_id: checkoutId,
                address_id: addressId
            });

            onClose();
            onSuccess?.();
        } catch (error) {
            console.log(error);
        }
    };

    const handleCloseCreateAddress = () => {
        setIsCreateMode(false);
    };

    return(
        <>
            <Modal open={open} onClose={onClose} >
                <Flex gap="15px" flexDirection="column">
                    <Flex flexDirection="column">
                        <Flex alignItems="center"> <Text fontSize="large">Endereços </Text> <Text fontSize="small">({data?.data?.length || 0}/3)</Text> </Flex>
                        <Text color="secondary">Selecione um endereço para entrega</Text>
                    </Flex>
                    {data?.data.map((item:any) => (
                        <ContainerAddress key={item.id} >
                            <Flex flexDirection="column" gap="5px">
                                <Text fontSize="medium" fontWeight="bold">{item.label}</Text>
                                <Text fontSize="normal" fontWeight="normal">{item.street} {item.number} | {item.city}</Text>
                            </Flex>

                            <Button
                                variant="contained"
                                palette="primary"
                                onclick={() => handleSelectAddress(item.id)}
                            >
                                Selecionar
                            </Button>
                        </ContainerAddress>
                    ))}
                    <Button
                        variant="contained"
                        palette="neutral"
                        onclick={() => setIsCreateMode(true)}
                    >
                        Adicionar novo endereço
                    </Button>
                </Flex>
            </Modal>

            <ModalCreateAddress
                checkoutId={checkoutId}
                open={isCreateMode}
                onClose={handleCloseCreateAddress}
                onSuccess={() => {
                    setIsCreateMode(false);
                    onClose();
                    onSuccess?.();
                }}
            />
        </>
    )

}


const ContainerAddress = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
    justify-content: space-between;
    padding: 12px;
    border-radius: 4px;
`

