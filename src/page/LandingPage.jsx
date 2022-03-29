import InfoText from '../comp/InfoText'
import styled from 'styled-components'
import TeaserComponent from '../comp/TeaserComponent'
import LogoOH from '../img/logo.png'
import VisualImg2 from '../img/freestocks-_3Q3tsJ01nc-unsplash.jpg'
import TeaserImg1 from '../img/teaser_01.jpg'
import TeaserImg2 from '../img/teaser_02.jpg'
import TeaserImg3 from '../img/teaser_03.jpg'
import TeaserImg4 from '../img/teaser_04.jpg'
import TeaserImg5 from '../img/teaser_05.jpg'
import TeaserImg6 from '../img/teaser_06.jpg'
import VisualImg from '../img/sapeksh-singh-siwach-6fCDM6u0dM0-unsplash.jpg'
import ImageAndHeader from '../comp/ImageAndHeader.jsx'

function LandingPage() {
  return (
    <Container>
      <ImageAndHeader
        headerText={`Hi! We are LoremIpsum. 
        We help you to transform, innovate and grow.`}
        headerColor={'white'}
        logoImg={LogoOH}
        backgroundImg={VisualImg}
      />
      <InfoText />
      <TeaserComponent
        img1={TeaserImg1}
        text1={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
        img2={TeaserImg2}
        text2={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
        img3={TeaserImg3}
        text3={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
      />
      <TeaserComponent
        img1={TeaserImg4}
        text1={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
        img2={TeaserImg5}
        text2={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
        img3={TeaserImg6}
        text3={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
      />
      <ImageAndHeader
        headerText={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptatem mollitia voluptates cumque nemo ipsa qui suscipit`}
        headerColor={'white'}
        showLogo={'none'}
        backgroundImg={VisualImg2}
      />
    </Container>
  )
}

export default LandingPage

const Container = styled.section`
  /* background-color: transparent; */
`
