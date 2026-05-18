import { useCart } from "../../hooks/useCart"

const CartPage = () =>{
    const cart = useCart()

   
    return(

        <>

            <h1>Carrinho</h1>
            {cart.item.map((item) =>(
                <p key={item.id}>{item.id}</p>
            ))}
        </>
    )
}


export default CartPage