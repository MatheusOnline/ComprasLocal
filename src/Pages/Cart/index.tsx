import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { CartCatalog } from "@components/Layout/CartCatalog/CartCatalog"
import { CartSummary } from "@components/Layout/CartSummary"
import { Flex } from "@components/UI/Flex"
import { Breadcrumbs } from "@components/UI/Breadcrumb"

import { ScrollToTop } from "@components/UI/ScrollToTop"
import { useCartStore } from "../../stores/cartStore"

const CartPage = () =>{
    const { cart, loading } = useCartStore()

    const total = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);
    return(
        <DefaultTemplate>
            <ScrollToTop/>
            <Breadcrumbs label="Carrinho" isLoading={false}/>
            
            <Flex flexDirection="row"  gap="10px" fullWidth={true}>
                <CartCatalog items={cart} isLoading={loading}/>
                <CartSummary total={total} subtotal={total}  isLoading={loading} redirect="/payment/checkout"/>
            </Flex>
            

        </DefaultTemplate>
    )
}


export default CartPage