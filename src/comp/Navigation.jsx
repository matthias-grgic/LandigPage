import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ProjectNav from './Navigation/ProjectNav'
import AboutNav from './Navigation/AboutNav'

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
  margin-bottom: 40px;
  padding: 8px;
  position: fixed;
  width: 100%;
  z-index: 1;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`

const StyledNavLink = styled(NavLink)`
  align-items: center;
  background-color: transparent;
  display: flex;
  font-size: clamp(1.5rem, 2vw, 3rem);
  justify-content: left;
  &:hover {
    color: var(--third-color);
  }
`
