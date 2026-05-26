import { Text } from "@components/UI/Text"
import { Flex } from "@components/UI/Flex"

type priceProps = {
    price: number,
    descount?: number
}

export const ProductPrice = ({price, descount}: priceProps ) => {
    return(
        <>
        {descount ? (
            <Flex gap="6px" alignItems="end"  >
                <Text fontWeight="semi-bold" fontSize="large">R${(price * (1 - descount / 100)).toFixed(2)}</Text>
                <Text  fontWeight="normal" fontSize="medium" color="secondary" through={true}>R${price.toFixed(2)}</Text>
            </Flex>
        ):(

            <Text fontSize="large" fontWeight="semi-bold">R${price.toFixed(2)}</Text>
        )}
        </>   
    )
}

