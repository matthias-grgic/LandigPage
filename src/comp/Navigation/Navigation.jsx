import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import SubNav from './SubNav'

function Navigation() {
  const [navbar, setNavBar] = useState(false)

  //change state when scrolled down
  const changeBackground = () => {
    if (document.scrollingElement.scrollTop >= 66) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    document.addEventListener('scroll', changeBackground)
  })

  return (
    <NavBar status={navbar ? 'navbar' : 'active'}>
      <SubNav buttonName={'PROJEKTE'} subButton1={'PROJEKT-A'} subButton2={'PROJEKT-B'} subButton3={'PROJEKT-C'} />
      <SubNav buttonName={'ÜBER UNS'} subButton1={'PHILOSOPHIE'} subButton2={'GESCHÄFTSFÜHRUNG'} subButton3={'MITARBEITER'} />
      <SubNav buttonName={'REFERENZEN'} />
      <SubNav buttonName={'KONTAKT'} />
    </NavBar>
  )
}

export default Navigation

const NavBar = styled.nav`
  display: flex;
  background-color: ${(props) => (props.status === 'active' ? 'transparent' : 'rgb(211, 211, 211, 0.6)')};
  top: 0;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 1;
`
