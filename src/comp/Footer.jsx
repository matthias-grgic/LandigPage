import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {
  return (
    <NavBar>
      <StyledNavLink to='/'>Link1</StyledNavLink>
      <StyledNavLink to='/'>Link2</StyledNavLink>
      <StyledNavLink to='/'>Link3</StyledNavLink>
    </NavBar>
  )
}

export default Footer

const NavBar = styled.div`
  background: transparent;
  bottom: 0;
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
  fill: black;
  justify-content: center;
  width: 40px;
  &:hover {
    background-color: var(--secondary-color);
    color: var(--white-color);
  }
`
