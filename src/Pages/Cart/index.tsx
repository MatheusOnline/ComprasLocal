import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { CartCatalog } from "@components/Layout/CartCatalog/CartCatalog"
import { CartSummary } from "@components/Layout/CartSummary"
import { Flex } from "@components/UI/Flex"
import { Breadcrumbs } from "@components/UI/Breadcrumb"

import { ScrollToTop } from "@components/UI/ScrollToTop"
import { useCartStore } from "../../stores/cartStore"
import { useCheckoutStore } from "../../stores/checkoutStore"

const CartPage = () =>{
    const { cart, loading, getCart, selectedIds } = useCartStore()
    const { checkoutInit } = useCheckoutStore()
    const navigate = useNavigate()

    useEffect(() => {
        getCart();
    }, []);

    const selectedTotal = cart.reduce((acc, item) => {
        if (selectedIds.includes(item.id)) {
            return acc + item.price * item.quantity;
        }
        return acc;
    }, 0);

    async function CreateCheckout(){
        const data = await checkoutInit(selectedIds)
        if(data){
            navigate(`/payment/checkout/${data.checkoutId}`)
        }
    }

    return(
        <DefaultTemplate>
            <ScrollToTop/>
            <Breadcrumbs label="Carrinho" isLoading={false}/>
            
            <Flex flexDirection="row"  gap="10px" fullWidth={true}>
                <CartCatalog items={cart} isLoading={loading}/>
                <CartSummary total={selectedTotal} subtotal={selectedTotal} isEnabled={selectedIds.length === 0} isLoading={loading} onConfirm={CreateCheckout}/>
            </Flex>
            

        </DefaultTemplate>
    )
}


export default CartPage