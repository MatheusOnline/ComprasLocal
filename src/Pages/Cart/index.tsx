import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { CartCatalog } from "@components/Layout/CartCatalog/CartCatalog"
import { CartSummary } from "@components/Layout/CartSummary"
import { Flex } from "@components/UI/Flex"
import { Breadcrumbs } from "@components/UI/Breadcrumb"
import { useCartData } from "../../hooks/useCartDatas"
import { ScrollToTop } from "@components/UI/ScrollToTop"


const CartPage = () =>{
    const { data, isLoading } = useCartData()

    return(
        <DefaultTemplate>
            <ScrollToTop/>
            <Breadcrumbs label="Carrinho" isLoading={false}/>
            
            <Flex flexDirection="row"  gap="10px" fullWidth={true}>
                <CartCatalog items={data} isLoading={isLoading}/>
                <CartSummary isLoading={isLoading} redirect="/payment/checkout"/>
            </Flex>
            

        </DefaultTemplate>
    )
}


export default CartPage