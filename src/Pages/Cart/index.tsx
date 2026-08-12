
import { useNavigate } from "react-router-dom"
import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { CartCatalog } from "@components/Layout/CartCatalog/CartCatalog"
import { CartSummary } from "@components/Layout/CartSummary"
import { Flex } from "@components/UI/Flex"
import { Breadcrumbs } from "@components/UI/Breadcrumb"

import { ScrollToTop } from "@components/UI/ScrollToTop"
import { useCartStore } from "../../stores/cartStore"



import { useGetCart } from "../../service/cartService"
import { useCreateCheckoutCart } from "../../service/checkoutService"

const CartPage = () =>{
    const {  selectedIds } = useCartStore()
    const createCheckout = useCreateCheckoutCart()
    const navigate = useNavigate()

    const { data, isLoading } = useGetCart()    

    const selectedItems = data?.data.filter((item: any) => selectedIds.includes(item.id)) ?? [];

    const subtotal = selectedItems.reduce((total: number, item: any) => {
        return total + item.price * item.quantity;
    }, 0);

    function CreateCheckout(){
        createCheckout.mutateAsync(
        {
            
            products_id: selectedIds
        },{
            onSuccess: async (data) => {
    
                console.log(data)
                 navigate(`/payment/checkout/${data?.data?.checkoutId}`)
            },
            onError: (error: any)  => {
                console.log(error.response.data)
            }
        })

    }

    return(
        <DefaultTemplate>
            <ScrollToTop/>
            <Breadcrumbs label="Carrinho" isLoading={false}/>
            
            <Flex flexDirection="row"  gap="10px" fullWidth={true}>
                <CartCatalog items={data?.data} isLoading={isLoading}/>
                <CartSummary total={subtotal} subtotal={subtotal} isEnabled={selectedIds.length === 0} isLoading={isLoading} onConfirm={CreateCheckout}/>
            </Flex>
            

        </DefaultTemplate>
    )
}


export default CartPage