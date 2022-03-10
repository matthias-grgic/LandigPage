import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterStyled>
      <Copyright>© 2022 Orange Hive GmbH</Copyright>
      <FunctionNav>
        <StyledNavLink to='/'>Impressum</StyledNavLink>
        <StyledNavLink to='/'>Rechtliche Hinweise</StyledNavLink>
        <StyledNavLink to='/'>Nutzungsbedingungen</StyledNavLink>
      </FunctionNav>
    </FooterStyled>
  )
}

export default Footer

const Copyright = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  color: var(--white-color);
  justify-content: center;
`
const FunctionNav = styled.div`
  display: flex;
  background-color: transparent;
  gap: 1rem;
  justify-content: center;
`

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--fourth-color);
  bottom: 0;
  gap: 1.5rem;
  justify-content: center;
  padding: 8px;
  position: fixed;
  height: 20%;
  width: 100%;
  z-index: 1;
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  background: transparent;
  color: var(--white-color);
  justify-content: center;
  &:hover {
    color: var(--secondary-color);
  }
`
