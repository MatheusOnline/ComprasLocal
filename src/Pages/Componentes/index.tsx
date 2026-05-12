import { Button } from "../../Components/UI/Button/Button";
import {Flex} from "../../Components/UI/Flex/Flex";
function ComponentesPage() {
    return (
        <div>
            <Flex gap="20px">
                <Flex flexDirection="column" gap="10px">
                    <Button variant="contained" palette="primary">Comprar agora</Button>
                    <Button variant="contained" palette="secondary">Button</Button>
                    <Button variant="contained" palette="neutral">Button</Button>
                </Flex>
                <Flex flexDirection="column" gap="10px">
                    <Button variant="outlined" palette="primary">Button</Button>
                    <Button variant="outlined" palette="secondary">Button</Button>
                    <Button variant="outlined" palette="neutral">Button</Button>
                </Flex>
            </Flex>
        </div>
    )
}

export default ComponentesPage;