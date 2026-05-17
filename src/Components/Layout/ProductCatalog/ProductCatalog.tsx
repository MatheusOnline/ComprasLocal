import { useEffect, useState } from "react"

import { ProductCard } from "../../Features/ProductCard/ProductCard"
import { Grid } from "../../UI/Grid/Grid"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export function ProductCatalog() {

  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <Grid columns="repeat(6, 1fr)" gap="20px">

      {loading ? (
        <>
          <Skeleton height={300} />
          <Skeleton height={300} />
          <Skeleton height={300} />
          <Skeleton height={300} />
          <Skeleton height={300} />
          <Skeleton height={300} />
          <Skeleton height={300} />
          <Skeleton height={300} />
          <Skeleton height={300} />
          <Skeleton height={300} />
        </>
      ) : (
        products.map((product: any) => (
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
      )}

    </Grid>
  )
}