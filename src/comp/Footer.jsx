import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoOH from '../img/logo.png'

function Footer() {
  return (
    <FooterStyled>
      <Copyright>© 2022 Orange Hive GmbH</Copyright>
      <LogoStyled />
      <FunctionNav>
        <StyledNavLink to='/impressum'>Impressum</StyledNavLink>
        <StyledNavLink to='/legalregulations'>Rechtliche Hinweise</StyledNavLink>
        <StyledNavLink to='/termsofuse'>Nutzungsbedingungen</StyledNavLink>
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
  gap: 1.5rem;
  justify-content: center;
  padding: 5%;
  height: 50%;
  width: 100%;
`

const LogoStyled = styled.div`
  display: flex;
  background-image: url(${LogoOH});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  object-fit: contain;
  width: 100%;
  height: 100%;
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
