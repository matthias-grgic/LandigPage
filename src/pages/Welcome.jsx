import styled from 'styled-components'
import VisualImg from '../img/visual.jpg'

function Welcome() {
  return (
    <Container>
      <Text>
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
  position: relative;
  text-align: center;
  justify-content: center;
  width: 100%;
`

const ImageStyled = styled.div`
  display: block;
  background-image: url(${VisualImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 1000px;
  border: none;
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
