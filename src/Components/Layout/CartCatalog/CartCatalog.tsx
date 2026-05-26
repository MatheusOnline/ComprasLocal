import { CartItemCard } from "@components/Features/CartItemCard/CartItemCard"
import type { CartItemProps } from "../../../types/types"

import styled from "styled-components"

type CartCatalogProps = {
    items: CartItemProps[]
}

export const CartCatalog = ({items}: CartCatalogProps) => {
    
    return(
        <Container>
            {
            items.map((item) => (
                <CartItemCard 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    store="teste"
                    price={item.price}
                    thumbnail={item.thumbnail}
                    quantity={item.quantity}
                />
            ))
            }
        </Container>
        
    )
}

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid #ccc;
    gap: 10px;
`    
