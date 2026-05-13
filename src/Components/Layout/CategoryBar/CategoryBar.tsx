import {Category} from "../../UI/Category/Category"
import {Grid} from "../../UI/Grid/Grid"

export function CategoryBar() {
    return(
        <Grid columns="repeat(6, 1fr)" gap="20px">
            <Category name="eletronic" />
            <Category name="clothing" />
            <Category name="house" />
            <Category name="automotive" />
            <Category name="sports" />
            <Category name="headphone" />  
        </Grid>
    )
}

   