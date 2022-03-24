import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoOH from '../img/logo.png'
// import { NavHashLink } from 'react-router-hash-link'

function Footer() {
  return (
    <FooterContainer>
      <LogoStyled />
      <FunctionNav>
        <StyledNavLink to='/impressum'>Impressum</StyledNavLink>
        <StyledNavLink to='/legalregulations'>Rechtliche Hinweise</StyledNavLink>
        <StyledNavLink to='/termsofuse'>Nutzungsbedingungen</StyledNavLink>
      </FunctionNav>
      <Copyright>© 2022 XXX XXX</Copyright>
    </FooterContainer>
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
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  gap: 1rem;
  justify-content: center;
  width: 100%;
`

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  padding: clamp(0.8rem, 1.5vw, 3rem);
  height: 50%;
  width: 100%;
`

const LogoStyled = styled.div`
  display: flex;
  background-image: url(${LogoOH});
  background-size: clamp(15rem, 50vw, 30rem);
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  height: 10rem;
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  background: transparent;
  color: black;
  justify-content: center;
  &:hover {
    color: var(--secondary-color);
  }
`
