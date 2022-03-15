import { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function SubNav({ buttonName, subButton1, subButton2, subButton3 }) {
  const [showMenuAbout, setShowMenuAbout] = useState(false)
  return (
    <Container onMouseLeave={() => setShowMenuAbout(false)} onMouseOver={() => setShowMenuAbout(true)}>
      <StyledNavLink to=''>{buttonName}</StyledNavLink>
      <Menu status={showMenuAbout}>
        <StyledNavLink to={`/${subButton1}`}>{subButton1}</StyledNavLink>
        <StyledNavLink to={`/${subButton2}`}>{subButton2}</StyledNavLink>
        <StyledNavLink to={`/${subButton3}`}>{subButton3}</StyledNavLink>
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
  color: var(--fourth-color);
  cursor: pointer;
  display: flex;
  font-size: clamp(0.9rem, 2vw, 3rem);
  &:hover {
    background-color: rgb(255, 255, 255, 0.5);
  }
`
