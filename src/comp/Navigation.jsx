import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Navigation() {
  return (
    <NavBar>
      <StyledNavLink to='/'>Projekte</StyledNavLink>
      <StyledNavLink to='/test'>Über uns</StyledNavLink>
      <StyledNavLink to='/test2'>Referenzen</StyledNavLink>
      <StyledNavLink to='/test2'>Kontakt</StyledNavLink>
    </NavBar>
  )
}

export default Navigation

const NavBar = styled.div`
  background: transparent;
  top: 0;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  padding: 8px;
  position: fixed;
  width: 100%;
  z-index: 1;
`

const StyledNavLink = styled(NavLink)`
  align-items: center;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: var(--secondary-color);
    color: var(--white-color);
  }
`
