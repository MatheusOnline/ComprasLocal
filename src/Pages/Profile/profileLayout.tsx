import styled from "styled-components"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { DefaultTemplate } from "../../Template/DefaultTemplate"
import { useAuth } from "../../stores/useAuthStore"
import { Button } from "@components/UI/Button"
import { Line } from "@components/UI/Line"

import { useLogout } from "../../service/authService"


const ProfileLayout = () => {
    const { user } = useAuth()
    const {mutate: logout} = useLogout()
    const navigate = useNavigate()

    function handleLogout() {
        logout(undefined, {
            onSuccess: () => {
                // Limpa estado do usuário
                // Navega para login
                useAuth.getState().logout();
                navigate("/auth/login");
            },
            
        });
    }
    return (
        <DefaultTemplate>
            <ProfileShell>
                <Sidebar>
                    <ProfileCard>
                        <Avatar>m</Avatar>
                        <div>
                            <SidebarTitle>Minha conta</SidebarTitle>
                            <SidebarText>{user?.name}</SidebarText>
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
                                Minhas Compras
                            </StyledNavLink>
                        </NavItem>
                    </NavList>

                    
                    <br /><br /><br /><br /><br />
                    <Line></Line>
                    <Button palette="danger" variant="contained" onclick={handleLogout} >Sair</Button>
                    
                </Sidebar>

                <ContentArea>

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
    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
    border-radius: 8px;
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
    border-radius: 25%;
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
    gap: 0.2rem;
`

const NavItem = styled.div``

const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 0.85rem 0.95rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.neutro_color_700};
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.brand_color_300};
    }

    &.active {
        color: ${({ theme }) => theme.colors.brand_color_500};
    }
`


const ContentArea = styled.section`
    border: 1px solid ${({ theme }) => theme.colors.neutro_color_300};
    border-radius: 8px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
    min-height: 420px;
`

