import { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function SubNav({ buttonName, subButton1, subButton2, subButton3, linkColor }) {
  const [showMenuAbout, setShowMenuAbout] = useState(false)
  return (
    <Container onMouseLeave={() => setShowMenuAbout(false)} onMouseOver={() => setShowMenuAbout(true)}>
      <StyledNavLink to={`/${buttonName}`} color={linkColor ? 'on' : 'off'}>
        {buttonName}
      </StyledNavLink>
      <Menu status={showMenuAbout}>
        <StyledNavLink to={`/${subButton1}`} color={linkColor ? 'on' : 'off'}>
          {subButton1}
        </StyledNavLink>
        <StyledNavLink to={`/${subButton2}`} color={linkColor ? 'on' : 'off'}>
          {subButton2}
        </StyledNavLink>
        <StyledNavLink to={`/${subButton3}`} color={linkColor ? 'on' : 'off'}>
          {subButton3}
        </StyledNavLink>
      </Menu>
    </Container>
  )
}

export default SubNav

const Container = styled.section`
  background-color: transparent;
`

const Menu = styled.div`
  display: ${(props) => (props.status === true ? 'flex' : 'none')};
  background-color: transparent;
  flex-direction: column;
  position: fixed;
`

const StyledNavLink = styled(NavLink)`
  background-color: transparent;
  color: ${(props) => (props.color === 'on' ? 'rgb(218, 157, 165)' : 'white')};
  cursor: pointer;
  display: flex;
  font-size: clamp(0.9rem, 2vw, 3rem);
  &:hover {
    background-color: rgb(255, 221, 225, 0.5);
  }
`
