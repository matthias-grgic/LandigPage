import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoOH from '../img/logo.png'
// import { NavHashLink } from 'react-router-hash-link'

function Footer() {
  return (
    <FooterStyled>
      <LogoStyled />
      <FunctionNav>
        <StyledNavLink to='/impressum'>Impressum</StyledNavLink>
        <StyledNavLink to='/legalregulations'>Rechtliche Hinweise</StyledNavLink>
        <StyledNavLink to='/termsofuse'>Nutzungsbedingungen</StyledNavLink>
      </FunctionNav>
      <Copyright>© 2022 Orange Hive GmbH</Copyright>
    </FooterStyled>
  )
}

export default Footer

const Copyright = styled.p`
  display: flex;
  align-items: center;
  background: transparent;
  color: var(--main-txt-color);
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  justify-content: center;
`
const FunctionNav = styled.div`
  display: flex;
  background-color: transparent;
  font-size: clamp(0.8rem, 1.5vw, 1.2rem);
  gap: 1rem;
  justify-content: center;
  width: 100%;
`

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  background: var(--fourth-color);
  gap: 1.5rem;
  justify-content: center;
  padding: clamp(0.8rem, 1.5vw, 3rem);
  height: 50%;
  width: 100%;
  margin-top: 100px;
`

const LogoStyled = styled.div`
  display: flex;
  background-image: url(${LogoOH});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  height: 5rem;
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
