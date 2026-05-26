import type { CardProductProps } from "../../../types/types"
import { CatalogProductsSkeleton } from "./CatalogProductsSkeleton"
import { ProductCard } from "../../Features/ProductCard/ProductCard"
import { Grid } from "../../UI/Grid/Grid"

type CatalogProductsProps = {
    products?: CardProductProps[],
    isLoading: boolean
}


export function CatalogProducts({products, isLoading}:CatalogProductsProps) {

  {/*Em quanto tiver carregando vai mostrar o skelleton */}
  if(isLoading){
    return(
      <Grid columns="repeat(6, 1fr)" gap="20px">
        <CatalogProductsSkeleton/>
      </Grid>
    )
  }

  {/*Quando terminar de carregar vai aparecer o catalogo */}
  return (
    <Grid columns="repeat(6, 1fr)" gap="20px">
      {  
        products?.map((product: any) => (
          <ProductCard
            id={product.id}
            key={product.id}
            ratting={product.rating}
            price={product.price}
            title={product.title}
            store={product.brand}
            imgSrc={product.thumbnail}
            category={product.category}
              discount={product.discountPercentage}
          />
        ))
      }
    </Grid>
  )
}