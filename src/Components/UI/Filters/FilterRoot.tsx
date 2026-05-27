import { Button } from "../Button"
type FilterRootProps = {
    type: "rating" | "price" | "location"
}

export const FilterRoot = ({type}: FilterRootProps) => {
    return(
        <Button palette="primary" variant="contained">
            {type}
        </Button>
    )
}