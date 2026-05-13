import styled from "styled-components"
import { Flex } from "../Components/UI/Flex/Flex"

import { Header } from "../Components/Layout/Header/Header"
import { Footer } from "@components/Features/Fooster/Footer"

export function DefaultTemplate({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
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
        </Layout>
    )
}

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const ContainerdefaultTemplate = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1;
`