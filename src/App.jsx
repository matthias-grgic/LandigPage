import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import InfoText from './comp/InfoText'
import Teaser from './comp/Teaser'
import Footer from './comp/Footer'
import Impressum from './comp/Impressum'
import LegalRegulations from './comp/LegalRegulations'
import Navigation from './comp/Navigation/Navigation'
import TermsOfUse from './comp/TermsOfUse'
import Welcome from './comp/Welcome.jsx'

function App() {
  return (
    <MainStyled>
      <Navigation />
      <Content>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Welcome /> <InfoText /> <Teaser />
              </>
            }
          />
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
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const MainStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  overflow: auto;
  width: 100vw;
  height: 100vh;
`
