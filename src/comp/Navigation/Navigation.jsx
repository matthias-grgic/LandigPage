import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ProjectNav from './ProjectNav'
import AboutNav from './AboutNav'

function Navigation() {
  return (
    <NavBar>
      <ProjectNav />
      <AboutNav />
      <StyledNavLink to='/references'>REFERENZEN</StyledNavLink>
      <StyledNavLink to='/contact'>KONTAKT</StyledNavLink>
    </NavBar>
  )
}

export default Navigation

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
  top: 0;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 1;
  @media (max-width: 550px) {
  }
`

const StyledNavLink = styled(NavLink)`
  align-items: center;
  background-color: transparent;
  display: flex;
  font-size: clamp(0.9rem, 2vw, 3rem);
  justify-content: left;
  &:hover {
    color: var(--third-color);
  }
`