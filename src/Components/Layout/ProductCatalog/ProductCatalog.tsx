import { useEffect } from "react"
import { ProductCard } from "../../Features/ProductCard/ProductCard"
import { useState } from "react"
import { Grid } from "../../UI/Grid/Grid";




export function ProductCatalog() {

    const [products, setProducts] = useState([]);

    useEffect(() => { 
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setProducts(data.products));
  }, [])    

  console.log(products)


    return(
        <Grid columns="repeat(6, 1fr)" gap="20px">
            {products.map((product: any) => (
                <ProductCard
                    id={product.id}
                    key={product.id}
                    ratting={product.rating} 
                    price={product.price}
                    title={product.title}
                    store={product.brand}
                    imgSrc={product.thumbnail}
                    category={product.category}
                />
            ))}
        </Grid>
    )

}