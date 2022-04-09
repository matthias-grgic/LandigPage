import styled from 'styled-components'

function Welcome({
  headerColor, headerText, logoImg, backgroundImg, showLogo
}) {
  return (
    <Container>
      <WelcomeStyled urlBackground={backgroundImg}>
        <Text color={headerColor}>
          <LogoStyled urlLogo={logoImg} displayLogo={showLogo} />
          <h1>{headerText}</h1>
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
  display: ${(props) => props.displayLogo};
  background-image: url(${(props) => props.urlLogo});
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
    color: ${(props) => props.color};
  }
`

const WelcomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.urlBackground});
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
