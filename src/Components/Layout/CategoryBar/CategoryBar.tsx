import {Category} from "../../Features/Category/Category"
import {Grid} from "../../UI/Grid/Grid"
import { Flex } from "@components/UI/Flex"
import { Text } from "@components/UI/Text"
export function CategoryBar() {
    return(
        <Flex flexDirection="column" gap="16px">
            <Text fontSize="large" color="primary" maxWidth="450px" underline={true}>
                Principais Categorias
            </Text>
            <Grid columns="repeat(6, 1fr)" gap="20px">
                <Category name="eletronic" />
                <Category name="clothing" />
                <Category name="house" />
                <Category name="automotive" />
                <Category name="sports" />
                <Category name="headphone" />  
            </Grid>
        </Flex>
    )
}

   