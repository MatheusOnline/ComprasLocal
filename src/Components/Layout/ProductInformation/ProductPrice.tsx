import { Text } from "@components/UI/Text"

type priceProps = {
    price: string,
    
}

export const ProductPrice = ({price}: priceProps ) => {
    return(
        <>
        
            <Text fontSize="large" fontWeight="semi-bold">R${Number(price).toFixed(2)}</Text>
    
        </>   
    )
}

