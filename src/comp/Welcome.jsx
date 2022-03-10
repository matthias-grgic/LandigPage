import styled from 'styled-components'
import VisualImg from '../img/visual.jpg'
import LogoOH from '../img/logo.png'

function Welcome() {
  return (
    <Container>
      <Text>
        <LogoStyled />
        <h1>{`Hi! We are Orange Hive. 
        We help brands transform, innovate and grow.`}</h1>
      </Text>
      <ImageStyled />
    </Container>
  )
}

export default Welcome

const Container = styled.div`
  display: flex;
  margin-bottom: 100px;
  position: relative;
  text-align: center;
  justify-content: center;
  width: 100%;
`

const ImageStyled = styled.div`
  background-image: url(${VisualImg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 800px;
  width: 2500px;
  @media (max-width: 550px) {
    height: 400px;
  }
`

const LogoStyled = styled.div`
  background-image: url(${LogoOH});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  height: 12rem;
  margin-bottom: 20px;
`

const Text = styled.div`
  background-color: transparent;
  color: var(--main-txt-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: pre-line;
  h1 {
    color: var(--third-color);
  }
`
