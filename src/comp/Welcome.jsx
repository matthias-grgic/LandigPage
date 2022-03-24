import styled from 'styled-components'
import VisualImg from '../img/visual.jpg'
import LogoOH from '../img/logo.png'

function Welcome() {
  return (
    <Container>
      <WelcomeStyled>
        <Text>
          <LogoStyled />
          <h1>{`Hi! We are LoremIpsum. 
        We help you to transform, innovate and grow.`}</h1>
        </Text>
      </WelcomeStyled>
    </Container>
  )
}

export default Welcome

const Container = styled.section`
  display: block;
  width: 100%;
`

const LogoStyled = styled.div`
  background-image: url(${LogoOH});
  background-size: clamp(20rem, 50vw, 35rem);
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  height: 100%;
`

const Text = styled.div`
  display: block;
  background-color: transparent;
  white-space: pre-line;
  h1 {
    color: white;
  }
`

const WelcomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${VisualImg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  justify-content: center;
  text-align: center;

  @media (max-width: 550px) {
    height: 350px;
    width: auto;
    background-size: cover;
    background-position: center;
  }
`
