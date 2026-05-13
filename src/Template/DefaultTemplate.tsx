import styled from "styled-components"
import { Flex } from "../Components/UI/Flex/Flex"

import { Header } from "../Components/Layout/Header/Header"
import { Footer } from "@components/Features/Fooster/Footer"

export function DefaultTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <br />
            <br />
            <Flex flexDirection="column" alignItems="center" gap="2rem"  fullWidth={true} >
                <ContainerdefaultTemplate >
                    {children}
                </ContainerdefaultTemplate>
            </Flex>
            <br />
            <br />
            <Footer />
        </div>
    )
}

const ContainerdefaultTemplate = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`