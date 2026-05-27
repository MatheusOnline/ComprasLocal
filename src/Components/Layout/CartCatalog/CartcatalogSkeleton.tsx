import { Skeleton } from "@components/UI/Skeleton"

import styled from "styled-components"



export const CartcatalogSkeleton = () => {
    
    return(
        <Container>
           <Skeleton height="150px"/>
           <Skeleton height="150px"/>
           <Skeleton height="150px"/>
           <Skeleton height="150px"/>
           
        </Container>
        
    )
}

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #ccc;
    gap: 10px;
`    
