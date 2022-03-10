import { useState } from 'react'
import styled from 'styled-components'

function ProjectNav() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Container onMouseLeave={() => setShowMenu(false)} onMouseOver={() => setShowMenu(true)}>
      <ButtonStyled>PROJEKTE</ButtonStyled>
      <Menu status={showMenu}>
        <ButtonStyled>PROJEKT A</ButtonStyled>
        <ButtonStyled>PROJEKT B</ButtonStyled>
        <ButtonStyled>PROJEKT C</ButtonStyled>
      </Menu>
    </Container>
  )
}

export default ProjectNav

const Container = styled.div`
  background-color: transparent;
`

const Menu = styled.div`
  display: ${(props) => (props.status === true ? 'flex' : 'none')};
  background-color: transparent;
  flex-direction: column;
  position: fixed;
`

const ButtonStyled = styled.section`
  display: flex;
  background-color: transparent;
  cursor: pointer;
  font-size: clamp(0.9rem, 2vw, 3rem);
  &:hover {
    color: var(--third-color);
  }
`
