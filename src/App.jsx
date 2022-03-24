import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import Footer from './comp/Footer'
import Impressum from './page/Impressum'
import LandingPage from './page/LandingPage'
import LegalRegulations from './page/LegalRegulations'
import Navigation from './comp/Navigation/Navigation'
import TermsOfUse from './page/TermsOfUse'

function App() {
  return (
    <MainStyled>
      <Navigation />
      <Content>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/legalregulations' element={<LegalRegulations />} />
          <Route path='/termsofuse' element={<TermsOfUse />} />
        </Routes>
        <Footer />
      </Content>
    </MainStyled>
  )
}

export default App

const Content = styled.div`
  display: flex;
  background-image: linear-gradient(0deg, #ee9ca7 0%, #ffdde1 100%);
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const MainStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
