import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import Navigation from './comp/Navigation'
import Welcome from './pages/Welcome'

function App() {
  return (
    <MainStyled>
      <Navigation />
      <Routes>
        <Route path='/' element={<Welcome />} />
      </Routes>
    </MainStyled>
  )
}

export default App

const MainStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
