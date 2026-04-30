import { Header } from "../Components/Layout/Header/Header"
import { Flex } from "../Components/UI/Flex/Flex"
export function DefaultTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <br />
            <br />
            <Flex flexDirection="column" alignItems="center" gap="2rem"  fullWidth={true}>
                {children}
            </Flex>
        </div>
    )
}