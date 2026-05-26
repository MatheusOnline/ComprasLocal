import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { CartCatalog } from "@components/Layout/CartCatalog/CartCatalog"
import { CartSummary } from "@components/Features/CartSummary"
import { Flex } from "@components/UI/Flex"

import { useCartData } from "../../hooks/useCartDatas"



const CartPage = () =>{
    const { data } = useCartData()

    return(
        <DefaultTemplate>
            <Flex flexDirection="row"  gap="10px" fullWidth={true}>
                <CartCatalog items={data}/>
                <CartSummary />
            </Flex>
            

        </DefaultTemplate>
    )
}


export default CartPage