import styled from "styled-components"
import { NavLink, Outlet } from "react-router-dom"
import { DefaultTemplate } from "../../Template/DefaultTemplate"

const ProfileLayout = () => {
    return (
        <DefaultTemplate>
            <ProfileShell>
                <Sidebar>
                    <ProfileCard>
                        <Avatar>U</Avatar>
                        <div>
                            <SidebarTitle>Minha conta</SidebarTitle>
                            <SidebarText>Gerencie seus dados, endereços e pedidos em um só lugar.</SidebarText>
                        </div>
                    </ProfileCard>

                    <NavList>
                        <NavItem>
                            <StyledNavLink to="/profile" end>
                                Início
                            </StyledNavLink>
                        </NavItem>
                        <NavItem>
                            <StyledNavLink to="/profile/address">
                                Endereços
                            </StyledNavLink>
                        </NavItem>
                        <NavItem>
                            <StyledNavLink to="/profile/orders">
                                Pedidos
                            </StyledNavLink>
                        </NavItem>
                    </NavList>

                    <SidebarFooter>
                        <span>Atualize suas informações com facilidade e rapidez.</span>
                    </SidebarFooter>
                </Sidebar>

                <ContentArea>
                    <ContentHeader>
                        <div>
                            <Eyebrow>Área do cliente</Eyebrow>
                            <h2>Perfil</h2>
                        </div>
                        <p>Acompanhe e atualize suas informações em um só lugar.</p>
                    </ContentHeader>

                    <Outlet />
                </ContentArea>
            </ProfileShell>
        </DefaultTemplate>
    )
}



export default ProfileLayout



const ProfileShell = styled.div`
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 1.5rem;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Sidebar = styled.aside`
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.background_color} 0%, ${({ theme }) => theme.colors.neutro_color_200} 100%);
    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
    border-radius: 24px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
    height: fit-content;
`

const ProfileCard = styled.div`
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
`

const Avatar = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.brand_color_500}, ${({ theme }) => theme.colors.brand_color_700});
    color: ${({ theme }) => theme.colors.background_color};
    font-weight: 700;
    font-size: 1rem;
    flex-shrink: 0;
`

const SidebarTitle = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.colors.neutro_color_700};
    font-size: 1.05rem;
`

const SidebarText = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.neutro_color_600};
    font-size: 0.92rem;
    line-height: 1.4;
`

const NavList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
`

const NavItem = styled.div``

const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 0.85rem 0.95rem;
    border-radius: 12px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.neutro_color_700};
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.colors.brand_color_200};
        color: ${({ theme }) => theme.colors.brand_color_700};
    }

    &.active {
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.brand_color_500}, ${({ theme }) => theme.colors.brand_color_700});
        color: ${({ theme }) => theme.colors.background_color};
        box-shadow: 0 8px 20px rgba(12, 174, 235, 0.2);
    }
`

const SidebarFooter = styled.div`
    margin-top: auto;
    padding: 0.85rem 0.95rem;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.background_color};
    color: ${({ theme }) => theme.colors.neutro_color_600};
    font-size: 0.88rem;
    line-height: 1.5;
    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
`

const ContentArea = styled.section`
    background: ${({ theme }) => theme.colors.background_color};
    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
    border-radius: 24px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
    min-height: 420px;
`

const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding-bottom: 0.65rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutro_color_300};

    h2 {
        margin: 0;
        color: ${({ theme }) => theme.colors.neutro_color_700};
        font-size: 1.25rem;
    }

    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.neutro_color_600};
    }
`

const Eyebrow = styled.span`
    display: inline-block;
    margin-bottom: 0.3rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.brand_color_600};
`

