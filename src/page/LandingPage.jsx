import InfoText from '../comp/InfoText'
import styled from 'styled-components'
import TeaserComponent from '../comp/TeaserComponent'
import TeaserImg1 from '../img/teaser_01.png'
import TeaserImg2 from '../img/teaser_02.png'
import TeaserImg3 from '../img/teaser_03.png'
import Welcome from '../comp/Welcome.jsx'

function LandingPage() {
  return (
    <Container>
      <Welcome />
      <InfoText />
      <TeaserComponent
        img1={TeaserImg1}
        text1={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem mollitia voluptates cumque nemo ipsa qui suscipit eius saepe culpa quae!'}
        img2={TeaserImg2}
        text2={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem mollitia voluptates cumque nemo ipsa qui suscipit eius saepe culpa quae!'}
        img3={TeaserImg3}
        text3={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem mollitia voluptates cumque nemo ipsa qui suscipit eius saepe culpa quae!'}
      />
    </Container>
  )
}

export default LandingPage

const Container = styled.section`
  background-color: transparent;
`
