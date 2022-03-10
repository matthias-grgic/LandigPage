import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Navigation() {
  return (
    <NavBar>
      <StyledNavLink to='/projects'>PROJEKTE</StyledNavLink>
      <StyledNavLink to='/about'>ÜBER UNS</StyledNavLink>
      <StyledNavLink to='/references'>REFERENZEN</StyledNavLink>
      <StyledNavLink to='/contact'>KONTAKT</StyledNavLink>
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
  background: transparent;
  display: flex;
  font-size: clamp(1.5rem, 2vw, 3rem);
  justify-content: center;
  &:hover {
    color: var(--secondary-color);
  }
`
