import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import Footer from './comp/Footer'

function App() {
  return (
    <MainStyled>
      <div>test</div>
      <Footer />
      {/* <Routes>
        <Route path='/' />
      </Routes> */}
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
